import React, {useEffect, useState} from 'react';
import {Animated, Easing, StyleSheet, Text} from 'react-native';
import {ToasModel} from '../models/commonModels';
import Appstlye from '../AppThemes/Appstlye';

const ToastComponent: React.FC<ToasModel> = ({
  visible,
  message,
  duration = 3000,
  onClose,
}) => {
  const [fadeAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    if (visible) {
      // Fade in
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        easing: Easing.ease,
        useNativeDriver: true,
      }).start();

      // Fade out after the duration
      const timer = setTimeout(() => {
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 300,
          easing: Easing.ease,
          useNativeDriver: true,
        }).start(() => {
          if (onClose) onClose();
        });
      }, duration);

      return () => clearTimeout(timer); // Clean up the timer if the component unmounts
    }
  }, [visible]);

  return (
    <Animated.View
      style={[
        Appstlye.style.toast,
        {
          opacity: fadeAnim,
          transform: [
            {
              translateY: fadeAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [50, 0],
              }),
            },
          ],
        },
      ]}>
      <Text style={Appstlye.style.toastText}>{message}</Text>
    </Animated.View>
  );
};

export default ToastComponent;
