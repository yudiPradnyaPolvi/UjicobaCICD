const Post = require("../../database/post-dokter");
const { posts } = require("../../../test/fixtures/posts-dokter");
const { fetchPosts, getPost } = require("./post.domain.dokter");

describe("src/application/domain/post.domain.dokter.spec.js", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  describe("fetchPosts()", () => {
    it("should return all posts", async () => {
      jest.spyOn(Post, "find").mockResolvedValue(posts);
      const response = await fetchPosts();
      expect(response.data).toBe(posts);
    });
  });
  describe("getPost()", () => {
    it("should return one post", async () => {
      jest.spyOn(Post, "findOne").mockResolvedValue(posts[0]);
      const response = await getPost(posts[0]._id);
      expect(response).toHaveProperty("data");
      expect(response.data).toBe(posts[0]);
    });
    it("should throw error", async () => {
      jest.spyOn(Post, "findOne").mockRejectedValue();
      const response = await getPost("xxx");
      expect(response).not.toHaveProperty("data");
      expect(response).toHaveProperty("message");
      expect(response.message).toBe("not found");
    });
  });
});
