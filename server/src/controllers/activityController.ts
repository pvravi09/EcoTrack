import { Request, Response } from 'express';
import Activity from '../models/activityModel';

interface AuthRequest extends Request {
  user?: any;
}

export const createActivity = async (req: AuthRequest, res: Response) => {
  try {
    const activity = await Activity.create({
      ...req.body,
      user: req.user._id,
    });
    res.status(201).json(activity);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const getActivities = async (req: AuthRequest, res: Response) => {
  try {
    const activities = await Activity.find({ user: req.user._id });
    res.json(activities);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const getActivity = async (req: AuthRequest, res: Response) => {
  try {
    const activity = await Activity.findById(req.params.id);
    
    if (!activity) {
      return res.status(404).json({ message: 'Activity not found' });
    }

    // Check if activity belongs to user
    if (activity.user.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: 'Not authorized' });
    }

    res.json(activity);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const updateActivity = async (req: AuthRequest, res: Response) => {
  try {
    const activity = await Activity.findById(req.params.id);

    if (!activity) {
      return res.status(404).json({ message: 'Activity not found' });
    }

    // Check if activity belongs to user
    if (activity.user.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: 'Not authorized' });
    }

    const updatedActivity = await Activity.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updatedActivity);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const deleteActivity = async (req: AuthRequest, res: Response) => {
  try {
    const activity = await Activity.findById(req.params.id);

    if (!activity) {
      return res.status(404).json({ message: 'Activity not found' });
    }

    // Check if activity belongs to user
    if (activity.user.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: 'Not authorized' });
    }

    await Activity.deleteOne({ _id: req.params.id });
    res.json({ message: 'Activity removed' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
}; 