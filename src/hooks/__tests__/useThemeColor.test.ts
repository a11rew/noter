import { renderHook } from '@testing-library/react-hooks';
import Colors from 'common/Colors';
import useThemeColor from '../useThemeColor';

type keys = 'text' | 'background' | 'borderColor';

describe('IsKeyboardOpen hook test suite', () => {
  it('should return the right values', () => {
    // Test for light theme colors
    for (const _i of Object.keys(Colors.light)) {
      const i = _i as keys;
      const { result } = renderHook(() => useThemeColor({}, i));

      expect(result.current).toBe(Colors.light[i]);
    }

    // Mock dark theme enabled
    jest.doMock('react-native/Libraries/Utilities/useColorScheme', () => {
      return {
        default: () => 'dark',
      };
    });

    // Test for dark theme colors
    for (let _i of Object.keys(Colors.dark)) {
      const i = _i as keys;
      const { result } = renderHook(() => useThemeColor({}, i as any));

      expect(result.current).toBe(Colors.dark[i]);
    }
  });
});
