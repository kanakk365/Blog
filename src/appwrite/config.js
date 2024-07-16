import conf from "../conf/conf";
import { Client, Databases, Storage, Query, Flag, ID } from "appwrite";

export class Service {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);

    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.bucket);
  }

  async createPost({ title, slug, content, fearturedImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          fearturedImage,
          status,
          userId,
        }
      );
    } catch (error) {
      console.log("Appwrite sevice :: createPost :: error", error);
    }
  }
  async updatePost(slug, { title, content, fearturedImage, status }) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          fearturedImage,
          status,
        }
      );
    } catch (error) {
      throw error;
    }
  }
  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
      return true;
    } catch (error) {
      throw error;
      return false;
    }
  }
  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
    } catch (error) {
      throw error;
      return false;
    }
  }
  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        queries
      );
    } catch (error) {
      throw error;
      return false;
    }
  }

  // file upload ki service

  async uploadFile(file) {
    try {
    } catch (error) {
      try {
        return await this.bucket.createFile(
          conf.appwriteBucketId,
          ID.unique(),
          file
        );
      } catch (error) {
        console.log("Appwrite service :: uploadFlie :: error", error);
        return false;
      }
    }
  }
  async deleteFile(fileId) {
    try {
      return await this.bucket.deleteFile(conf.appwriteBucketId, fileId);
    } catch (error) {
      console.log("Appwrite service :: deleteFile:: error", error);
      return false;
    }
  }
  getFielPreview(fileId) {
    return this.bucket.getFielPreview(conf.appwriteBucketId, fileId);
  }
}

const service = new Service();

export default service;
