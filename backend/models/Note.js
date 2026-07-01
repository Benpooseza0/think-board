import mongoose from "mongoose";

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }, // createAt, updateAt
);

const Note = mongoose.model("Note", noteSchema);

export default Note;

// ขั้นตอนการสร้างโมเดล Note:
// 1. นำเข้า mongoose
// 2. สร้าง schema สำหรับ Note โดยกำหนดฟิลด์ title และ content เป็น String และตั้งให้เป็น required
// 3. ใช้ timestamps เพื่อให้ mongoose สร้างฟิลด์ createdAt และ updatedAt อัตโนมัติ
// 4. สร้างโมเดล Note จาก schema ที่สร้างขึ้น
// 5. ส่งออกโมเดล Note เพื่อให้สามารถนำไปใช้ในส่วนอื่นของแอปพลิเคชันได้
