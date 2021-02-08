


import { useCallback } from 'react';

import { useMeetingManager } from '../../providers/MeetingProvider';
import { supportsSetSinkId } from '../../utils/device-utils';

export const useSelectAudioOutputDevice = () => {
  const meetingManager = useMeetingManager();

  const selectDevice = useCallback(async (deviceId: string) => {
    if (supportsSetSinkId()) {
      await meetingManager.selectAudioOutputDevice(deviceId);
    }
  }, []);

  return selectDevice;
};

export default useSelectAudioOutputDevice;
