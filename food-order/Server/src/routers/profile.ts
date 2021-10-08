import express, { Router, Request, Response } from 'express';
import checkJwt from '../middleware/checkjwt';
import Profile from '../entity/Profile';
import User from '../entity/User';
import { check, validationResult } from 'express-validator';
const router = Router();
interface ProfileFields {
  user: string;
  address: string;
  pincode: number;
  profile_picture?: string;
}

//@route        POST api/profile
//@description  Create or Update user profile
//access        Private
router.post(
  '/',

  checkJwt,
  check('address', 'Address is required').not().isEmpty(),
  check('pincode', 'Pincode is required').not().isEmpty(),

  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // destructure the request
    const { address, pincode, profile_picture } = req.body;
    //Build profile Object
    const profileFields: ProfileFields = {
      user: req.user.id,
      address: address,
      pincode: pincode,
      profile_picture: profile_picture,
    };

    try {
      let profile = await Profile.findOne({ user: req.user.id });

      if (profile) {
        //Update
        profile = await Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true }
        );
        return res.json(profile);
      }
      //Create
      profile = new Profile(profileFields);
      await profile.save();
      return res.json(profile);
    } catch (error) {
      res.status(500).send('Send error');
    }
  }
);
//@route        GET api/profile/me
//@description  Get current users profile
//access        Private
router.get('/me', checkJwt, async (req: Request, res: Response) => {
  try {
    const profile = await Profile.findOne({
      user: req.user.id,
    });
    //   ['name', 'email', 'phone']

    if (!profile) {
      return res.status(400).json({ msg: 'There is no profile for this user' });
    }
    res.json(profile);
  } catch (error) {
    res.status(500).send('Server Error');
  }
});
//@route        Delete api/profile/
//@description  Delete Profile by user_id
//access        Private
router.delete('/', checkJwt, async (req: Request, res: Response) => {
  try {
    //todo-remove user posts
    const profile = await Profile.findOne({
      user: req.user.id,
    });
    //   ['name', 'email', 'phone']

    if (!profile) {
      return res.status(400).json({ msg: 'There is no profile for this user' });
    }
    //remove profile
    await Profile.findOneAndRemove({ user: req.user.id });

    //remove user
    await User.findOneAndRemove({ _id: req.user.id });

    res.json({ msg: 'User Deleted' });
  } catch (error) {
    //if (error.kind == 'ObjectId') {
    //return res.status(400).json({ msg: 'Profile not found' });
    //}
    res.status(500).send('Server Error');
  }
});
export default router;
