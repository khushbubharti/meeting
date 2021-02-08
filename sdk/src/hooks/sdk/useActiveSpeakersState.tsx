


import { useState, useEffect } from 'react';
import { useMeetingManager } from '../../providers/MeetingProvider';

export function useActiveSpeakersState(): string[] {
  const meetingManager = useMeetingManager();
  const [activeSpeakers, setActiveSpeakers] = useState<string[]>([]);

  useEffect(() => {
    const activeSpeakerCb = (speakers: string[]) => setActiveSpeakers(speakers);
    meetingManager.subscribeToActiveSpeaker(activeSpeakerCb);

    return () => meetingManager.unsubscribeFromActiveSpeaker(activeSpeakerCb);
  }, []);

  return activeSpeakers;
}

export default useActiveSpeakersState;
