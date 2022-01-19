import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

import { Text, View } from 'common/Themed';
import normalize from 'utils/normalize';
import useColorScheme from 'hooks/useColorScheme';
import Colors from 'common/Colors';

interface Props {
  withBack?: boolean;
  onBack?: () => void;
}

const Header: React.FC<Props> = ({ withBack, onBack }) => {
  const navigation = useNavigation();
  const theme = useColorScheme();

  const handleBack = () => {
    // Handle optional callback
    if (onBack) {
      onBack();
    }
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {withBack && (
        <TouchableOpacity
          testID="back-button"
          onPress={handleBack}
          style={styles.back}>
          <Icon
            name="arrowleft"
            size={normalize(24)}
            color={theme === 'light' ? Colors.light.text : Colors.dark.text}
          />
        </TouchableOpacity>
      )}
      <Text style={styles.heading}>Noter</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    padding: '3%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontFamily: 'DMSans-Bold',
    fontSize: normalize(24),
  },
  back: {
    position: 'absolute',
    left: '2%',
    bottom: '50%',
  },
});
