/* eslint-disable prettier/prettier */

import React from 'react';
import { View, Image, StyleSheet, SafeAreaView, StatusBar, Text, Pressable, Linking } from 'react-native';

const colorGitHub = '#010409';
const colotFontGitHub = '#c9d1d9';
const colotDarkFontGitHub = '#4f565e';
const imageProfileGitHub = 'https://avatars.githubusercontent.com/u/80927757?v=4';
const urlToMyGitHub = 'https://github.com/cinara-neis';
const App = () => {
  const handlePressGoToGitHub = async () => {
    console.log('Verificando Link');
    const res = await Linking.openURL(urlToMyGitHub);
    if (res) {
      console.log('Link aprovado');
      console.log('Abrindo link');
      await Linking.openURL(urlToMyGitHub);
    }
  };

  return (
    <SafeAreaView style={style.container}>
      <StatusBar backgroundColor={colorGitHub} barStyle="light-content" />
      <View style={style.content} >
        <Image source={{ uri: imageProfileGitHub }} style={style.avatar} />
        <Text
          accessibilityLabel="Nome: Cinara Neis"
          style={[style.defaultText, style.name]}>
          Cinara Neis
        </Text>
        <Text
          accessibilityLabel="NickName: cinara-neis"
          style={[style.defaultText, style.nickname]}>
          cinara-neis
        </Text>
        <Text
          accessibilityLabel="Description: Desenvolvedora FrontEnd | Metodologias Ágeis ( Scrum / Kaban ) |
          JavaScript | HTML | CSS | StyledComponent | GIT | Python | React |
          React-Native |LGBTQIAP+"
          style={[style.defaultText, style.description]}>
          Desenvolvedora FrontEnd | Metodologias Ágeis ( Scrum / Kaban ) | JavaScript | HTML | CSS | StyledComponent | GIT |
          Python | React | React-Native |LGBTQIAP+
        </Text>
        <View style={style.viewDIO}>
          <Text style={[style.Text1]} />
          <Text style={[style.Text1]} />
          <Text style={[style.Text1]} />
          <Text style={[style.Text1]} />
          <Text style={[style.Text1]} />
          <Text style={[style.Text1]} />
          <Text style={[style.Text1]} />
          <Text style={[style.Text1]} />
          <Text style={[style.Text1]} />
          <Text style={[style.Text1]} />
          <Text style={[style.Text1]} />
          <Text style={[style.Text1]} />
          <Text style={[style.Text1]} />
        </View>
        <View style={style.viewDIO1}>
          <Text style={[style.Text1]} />
          <Text style={[style.Text2]} />
          <Text style={[style.Text2]} />
          <Text style={[style.Text1]} />
          <Text style={[style.Text1]} />
          <Text style={[style.Text1]} />
          <Text style={[style.Text2]} />
          <Text style={[style.Text1]} />
          <Text style={[style.Text1]} />
          <Text style={[style.Text1]} />
          <Text style={[style.Text2]} />
          <Text style={[style.Text1]} />
          <Text style={[style.Text1]} />
        </View>
        <View style={style.viewDIO1}>
          <Text style={[style.Text1]} />
          <Text style={[style.Text2]} />
          <Text style={[style.Text1]} />
          <Text style={[style.Text2]} />
          <Text style={[style.Text1]} />
          <Text style={[style.Text1]} />
          <Text style={[style.Text2]} />
          <Text style={[style.Text1]} />
          <Text style={[style.Text1]} />
          <Text style={[style.Text2]} />
          <Text style={[style.Text1]} />
          <Text style={[style.Text2]} />
          <Text style={[style.Text1]} />
        </View>
        <View style={style.viewDIO1}>
          <Text style={[style.Text1]} />
          <Text style={[style.Text2]} />
          <Text style={[style.Text1]} />
          <Text style={[style.Text2]} />
          <Text style={[style.Text1]} />
          <Text style={[style.Text1]} />
          <Text style={[style.Text2]} />
          <Text style={[style.Text1]} />
          <Text style={[style.Text1]} />
          <Text style={[style.Text2]} />
          <Text style={[style.Text1]} />
          <Text style={[style.Text2]} />
          <Text style={[style.Text1]} />
        </View>
        <View style={style.viewDIO1}>
          <Text style={[style.Text1]} />
          <Text style={[style.Text2]} />
          <Text style={[style.Text2]} />
          <Text style={[style.Text1]} />
          <Text style={[style.Text1]} />
          <Text style={[style.Text1]} />
          <Text style={[style.Text2]} />
          <Text style={[style.Text1]} />
          <Text style={[style.Text1]} />
          <Text style={[style.Text1]} />
          <Text style={[style.Text2]} />
          <Text style={[style.Text1]} />
          <Text style={[style.Text1]} />
        </View>
        <View style={style.viewDIO1}>
          <Text style={[style.Text1]} />
          <Text style={[style.Text1]} />
          <Text style={[style.Text1]} />
          <Text style={[style.Text1]} />
          <Text style={[style.Text1]} />
          <Text style={[style.Text1]} />
          <Text style={[style.Text1]} />
          <Text style={[style.Text1]} />
          <Text style={[style.Text1]} />
          <Text style={[style.Text1]} />
          <Text style={[style.Text1]} />
          <Text style={[style.Text1]} />
          <Text style={[style.Text1]} />
        </View>
        <Pressable onPress={handlePressGoToGitHub}>
          <View style={style.button}>
            <Text style={[style.defaultText, style.textButton]}>
              Open in GitHub
            </Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView >
  );
};

export default App;

const style = StyleSheet.create({
  container: {
    backgroundColor: colorGitHub,
    flex: 1,
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
    padding: 20,
  },
  avatar: {
    height: 200,
    width: 200,
    borderRadius: 100,
    borderColor: 'white',
    borderWidth: 2,
  },
  defaultText: {
    color: colotFontGitHub,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  nickname: {
    color: colotDarkFontGitHub,
    fontSize: 18,
  },
  description: {
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
  },
  button: {
    backgroundColor: colotDarkFontGitHub,
    borderRadius: 10,
    padding: 20,
    marginTop: 30,
  },
  textButton: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  Text1: {
    backgroundColor: '#216e39',
    borderRadius: 30,
    height: 15,
    width: 15,
    marginLeft: 1,
  },
  Text2: {
    backgroundColor: '#59e785',
    borderRadius: 30,
    height: 15,
    width: 15,
    marginLeft: 1,
  },
  viewDIO: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  viewDIO1: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
