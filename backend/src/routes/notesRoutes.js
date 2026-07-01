import express from 'express';
import { getAllNotes, createNote, updateNote, deleteNote } from '../controller/notesController.js';

const router = express.Router();

router.get('/', getAllNotes);

router.post('/', createNote);

router.put('/:id', updateNote);

router.delete('/:id', deleteNote);

export default router;

// endpoints คืออะไร
// คือเส้นทางที่เราสามารถเข้าถึงได้จาก client เพื่อทำการส่งข้อมูลหรือรับข้อมูลจาก server
