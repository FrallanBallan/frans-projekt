import express from 'express';
import { loadWarhammer } from '../controllers/wh-controller.mjs';
import { loadFactionUnits } from '../controllers/faction-controller.mjs';
import { loadUnitId } from '../controllers/unit-controller.mjs';
import { loadAllFactions } from '../controllers/allFaction-controller.mjs';
import { searchWarhammerUnits } from '../controllers/searchWarhammer-controller.mjs';

const router = express.Router();

router.route('/').get(loadWarhammer); //http://localhost:8008/warhammer
router.route('/unit/:id').get(loadUnitId); //http://localhost:8008/warhammer/unit/1
router.route('/factions').get(loadAllFactions); //http://localhost:8008/warhammer/factions
router.route('/factions/:faction').get(loadFactionUnits); // http://localhost:8008/warhammer/factions/High%20Elves

router.route('/search').get(searchWarhammerUnits); // http://localhost:8008/warhammer/search?query=elf
export default router;
