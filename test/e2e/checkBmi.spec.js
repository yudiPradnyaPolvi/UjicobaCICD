// const supertest = require("supertest");
// const { app } = require("../app");
// const { disconnect } = require("mongoose");
// //const { insertManyPosts, deleteManyPosts } = require("../fixtures/checkBmi");

// describe("tests/e2e/checkBmi.spec.js", () => {
//   beforeAll(() => {
//     //dieksekusi sebelum semua test berjalan
//   });
//   beforeEach(async () => {
//     //dieksekusi sebelum setiap test berjalan
//     await deleteManyPosts();
//     await insertManyPosts();
//   });

//   afterEach(async () => {
//     //dieksekusi setelah setiap test berjalan
//     //await deleteManyPosts();
//   });

//   describe("POST /checkBmi", () => {
//     //do testing positif
//     it("should return inserted post when data inserted", async () => {
//       const posts = await supertest(app)
//         .post("/dokter")
//         .send({
//           nomor_registrasi: "A003",
//           nama_dokter: "dr. Surya Giri",
//           profesi: "umum",
//           jenis_kelamin: "Laki-Laki",
//           email: "surya@gmail.com",
//           nomor_telepon: "081777278020",
//           alamat: "jl. kori nuansa",
//           jadwal_praktek: ["selasa", "rabu", "sabtu"],
//         });
//       expect(posts.body.status).toBe(200);
//       expect(posts.body.nomor_registrasi).toBe("A003");
//       expect(posts.body.nama_dokter).toBe("dr. Surya Giri");
//       expect(posts.body.profesi).toBe("umum");
//       expect(posts.body.jenis_kelamin).toBe("Laki-Laki");
//       expect(posts.body.email).toBe("surya@gmail.com");
//       expect(posts.body.nomor_telepon).toBe("081777278020");
//       expect(posts.body.alamat).toBe("jl. kori nuansa");
//       expect(posts.body.jadwal_praktek).toBe(["selasa", "rabu", "sabtu"]);
//     });

//     // field masih ada kosong
//     it("should return error nomor_registrasi validation when nomor_registrasi not filled'", async () => {
//       const posts = await supertest(app)
//         .post("/dokter")
//         .send({
//           nama_dokter: "dr. Surya Giri",
//           profesi: "umum",
//           jenis_kelamin: "Laki-Laki",
//           email: "surya@gmail.com",
//           nomor_telepon: "081777278020",
//           alamat: "jl. kori nuansa",
//           jadwal_praktek: ["selasa", "rabu", "sabtu"],
//         });
//       expect(posts.status).toBe(400);
//       expect(posts.body.message).toBe("nomor registrasi harus diisi ");
//     });
//     it("should return error nama_dokter validation when nama_dokter not filled'", async () => {
//       const posts = await supertest(app)
//         .post("/dokter")
//         .send({
//           nomor_registrasi: "A003",
//           profesi: "umum",
//           jenis_kelamin: "Laki-Laki",
//           email: "surya@gmail.com",
//           nomor_telepon: "081777278020",
//           alamat: "jl. kori nuansa",
//           jadwal_praktek: ["selasa", "rabu", "sabtu"],
//         });
//       expect(posts.status).toBe(400);
//       expect(posts.body.message).toBe("nama dokter harus diisi ");
//     });
//     it("should return error profesi validation when profesi not filled'", async () => {
//       const posts = await supertest(app)
//         .post("/dokter")
//         .send({
//           nomor_registrasi: "A003",
//           nama_dokter: "dr. Surya Giri",
//           jenis_kelamin: "Laki-Laki",
//           email: "surya@gmail.com",
//           nomor_telepon: "081777278020",
//           alamat: "jl. kori nuansa",
//           jadwal_praktek: ["selasa", "rabu", "sabtu"],
//         });
//       expect(posts.status).toBe(400);
//       expect(posts.body.message).toBe("profesi harus diisi ");
//     });
//     it("should return error jenis_kelamin validation when jenis_kelamin not filled'", async () => {
//       const posts = await supertest(app)
//         .post("/dokter")
//         .send({
//           nomor_registrasi: "A003",
//           nama_dokter: "dr. Surya Giri",
//           profesi: "umum",
//           email: "surya@gmail.com",
//           nomor_telepon: "081777278020",
//           alamat: "jl. kori nuansa",
//           jadwal_praktek: ["selasa", "rabu", "sabtu"],
//         });
//       expect(posts.status).toBe(400);
//       expect(posts.body.message).toBe("jenis kelamin harus diisi ");
//     });
//     it("should return error email validation when email not filled'", async () => {
//       const posts = await supertest(app)
//         .post("/dokter")
//         .send({
//           nomor_registrasi: "A003",
//           nama_dokter: "dr. Surya Giri",
//           profesi: "umum",
//           jenis_kelamin: "Laki-Laki",
//           nomor_telepon: "081777278020",
//           alamat: "jl. kori nuansa",
//           jadwal_praktek: ["selasa", "rabu", "sabtu"],
//         });
//       expect(posts.status).toBe(400);
//       expect(posts.body.message).toBe("email harus diisi ");
//     });
//     it("should return error nomor_telepon validation when nomor_telepon not filled'", async () => {
//       const posts = await supertest(app)
//         .post("/dokter")
//         .send({
//           nomor_registrasi: "A003",
//           nama_dokter: "dr. Surya Giri",
//           profesi: "umum",
//           jenis_kelamin: "Laki-Laki",
//           email: "surya@gmail.com",
//           alamat: "jl. kori nuansa",
//           jadwal_praktek: ["selasa", "rabu", "sabtu"],
//         });
//       expect(posts.status).toBe(400);
//       expect(posts.body.message).toBe("nomor telepon harus diisi ");
//     });
//     it("should return error alamat validation when alamat not filled'", async () => {
//       const posts = await supertest(app)
//         .post("/dokter")
//         .send({
//           nomor_registrasi: "A003",
//           nama_dokter: "dr. Surya Giri",
//           profesi: "umum",
//           jenis_kelamin: "Laki-Laki",
//           email: "surya@gmail.com",
//           nomor_telepon: "081777278020",
//           jadwal_praktek: ["selasa", "rabu", "sabtu"],
//         });
//       expect(posts.status).toBe(400);
//       expect(posts.body.message).toBe("alamat harus diisi ");
//     });
//     it("should return error jadwal validation when jadwal not filled'", async () => {
//       const posts = await supertest(app).post("/dokter").send({
//         nomor_registrasi: "A003",
//         nama_dokter: "dr. Surya Giri",
//         profesi: "umum",
//         jenis_kelamin: "Laki-Laki",
//         email: "surya@gmail.com",
//         nomor_telepon: "081777278020",
//         alamat: "jl. kori nuansa",
//       });
//       expect(posts.status).toBe(400);
//       expect(posts.body.message).toBe("jadwal harus diisi ");
//     });

//     it("should return when all field are not field", async () => {
//       const posts = await supertest(app).post("/dokter").send({});
//       expect(posts.status).toBe(400);
//       expect(posts.body.message).toBe("Semua harus diisi ");
//     });
//   });
//   
//  

//   afterAll(async () => {
//     //dieksekusi setelah semua test berjalan
//     await disconnect();
//   });
// });
