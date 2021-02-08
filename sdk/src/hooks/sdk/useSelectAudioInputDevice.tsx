


import { useCallback } from 'react';

import { useMeetingManager } from '../../providers/MeetingProvider';

export const useSelectAudioInputDevice = () => {
  const meetingManager = useMeetingManager();

  const selectDevice = useCallback(async (deviceId: string) => {
    await meetingManager.selectAudioInputDevice(deviceId);
  }, []);

  return selectDevice;
};

export default useSelectAudioInputDevice;
