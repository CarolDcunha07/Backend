const express = require('express');
const router = express.Router();
const UserModel = require('../models/loginModel');
const mongoose = require('mongoose');
const EventModel = require('../models/eventModel');
const RegistrationModel = require('../models/registrationModel');

const clubIds = {
    taleem: 'TAL001',
    rachana: 'RAC002',
    hackerearth: 'HCK003',
    flc: 'FLC004',
    yoga: 'YGA005',
    nss: 'NSS006'
};

const TaleemClubMember = mongoose.model('TaleemClubMember', new mongoose.Schema({ userId: String, username: String, email: String }));
const RachanaClubMember = mongoose.model('RachanaClubMember', new mongoose.Schema({ userId: String, username: String, email: String }));
const HackerearthClubMember = mongoose.model('HackerearthClubMember', new mongoose.Schema({ userId: String, username: String, email: String }));
const FlcClubMember = mongoose.model('FlcClubMember', new mongoose.Schema({ userId: String, username: String, email: String }));
const YogaClubMember = mongoose.model('YogaClubMember', new mongoose.Schema({ userId: String, username: String, email: String }));
const NssClubMember = mongoose.model('NssClubMember', new mongoose.Schema({ userId: String, username: String, email: String }));

router.post('/register', async (req, res) => {
    const { username, email, club } = req.body;

    if (!clubIds.hasOwnProperty(club)) {
        return res.status(400).json({ message: `Club "${club}" is not allowed for registration` });
    }

    try {
        const user = await UserModel.findOne({ $or: [{ username }, { email }] });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const clubMemberModel = getClubMemberModel(club);
        const existingMember = await clubMemberModel.findOne({ userId: user._id });
        if (existingMember) {
            return res.status(400).json({ message: `User ${username} is already registered for ${club} club` });
        }

        await clubMemberModel.create({ userId: user._id, username: user.username, email: user.email });

        user.club = club;
        await user.save();
        
        return res.status(200).json({ message: `User ${username} joined ${club} club successfully` });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
});

router.get('/events/:club', async (req, res) => {
    const { club } = req.params;

    try {
        const events = await EventModel.find({ club });

        return res.status(200).json({ events });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
});

router.post('/events/:eventId/register', async (req, res) => {
    const { userId } = req.body;
    const { eventId } = req.params;

    try {
        const existingRegistration = await RegistrationModel.findOne({ eventId, userId });
        if (existingRegistration) {
            return res.status(400).json({ message: 'User is already registered for this event' });
        }

        const event = await EventModel.findById(eventId);
        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }

        const currentDate = new Date();
        if (currentDate > event.lastRegistrationDate) {
            return res.status(400).json({ message: 'Registration closed for this event' });
        }

        await RegistrationModel.create({ eventId, userId, registrationDate: currentDate });

        const user = await UserModel.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const clubId = event.clubIds; 
        const clubMemberModel = getClubMemberModel(eventId, clubId);
        
        await clubMemberModel.create({ 
            userId, 
            username: user.username, 
            email: user.email 
        });

        return res.status(200).json({ message: 'Registration successful' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
});


function getClubMemberModel(eventId, clubId) {
    const collectionName = `${eventId}_${clubId}_members`;
    return mongoose.model(collectionName, new mongoose.Schema({ userId: String, username: String, email: String }));
}





function getClubMemberModel(club) {
    switch (club) {
        case 'taleem':
            return TaleemClubMember;
        case 'rachana':
            return RachanaClubMember;
        case 'hackerearth':
            return HackerearthClubMember;
        case 'flc':
            return FlcClubMember;
        case 'yoga':
            return YogaClubMember;
        case 'nss':
            return NssClubMember;
        default:
            throw new Error(`Invalid club name: ${club}`);
    }
}

module.exports = router;
