import React from 'react';
import { Image, Modal, StyleSheet, View } from 'react-native';
import RestartButton from '../components/UI/RestartButton';

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  image: {
    height: 300,
    width: 300,
    alignSelf: 'center',
  },
});

export default ({ open, setOpen }: Props) => {
  return (
    <Modal animationType="fade" visible={open}>
      <View style={styles.centeredView}>
        <View>
          <Image
            source={require('../assets/jpg/gameover.jpg')}
            style={styles.image}
          />
          <RestartButton onClick={() => setOpen(false)} />
        </View>
      </View>
    </Modal>
  );
};
