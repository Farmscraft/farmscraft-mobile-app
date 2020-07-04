import {StyleSheet} from 'react-native';

function elevationShadowStyle(elevation) {
  return {
    elevation,
    shadowColor: '#FAFAFA',
    shadowOffset: {width: 0, height: 0.5 * elevation},
    shadowOpacity: 0.5,
    shadowRadius: 0.5 * elevation,
  };
}

const styles = StyleSheet.create({
  counter_container: {
    height: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },

  counter_label_container: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
  },

  counter_control_container: {
    height: 30,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '80%',
    backgroundColor: '#f6f9ff',
    borderColor: '#e7e6e6',
    borderRadius: 4,
    borderWidth: 1,
  },

  counter_control_icon_container: {
    width: 40,
    height: 30,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
  },

  counter_control_labe_container: {
    borderColor: '#bbcde3',
    borderRadius: 4,
    borderWidth: 1,
    backgroundColor: 'white',
    width: 50,
    height: 29,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label_text: {
    textAlign: 'left',
    width: '100%',
    paddingHorizontal: 10,
  },
  icon_style: {
    width: 12,
    alignSelf: 'center',
    height: 2,
  },
  plus_icon: {
    width: 12,
    alignSelf: 'center',
    height: 12,
  },
});

export default styles;
