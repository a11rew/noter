import { renderHook, act } from '@testing-library/react-hooks';
import { Keyboard as _Keyboard } from 'react-native';
import useIsKeyboardOpen from '../useIsKeyboardOpen';

// Type private _emitter property
const Keyboard = _Keyboard as unknown as {
  _emitter: {
    emit: (event: string, {}) => void;
  };
};

describe('IsKeyboardOpen hook test suite', () => {
  it('should return the right values', () => {
    const { result } = renderHook(() => useIsKeyboardOpen());

    // Keyboard hidden
    expect(result.current).toBeFalsy();

    // Activate keyboard
    act(() => {
      Keyboard._emitter.emit('keyboardDidShow', {});
    });

    // Keyboard visible
    expect(result.current).toBeTruthy();
  });
});
