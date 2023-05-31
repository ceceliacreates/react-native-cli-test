
import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title?: string;
}>;

type ButtonSectionProps = {
  title: string;
}

function ButtonSection({title}: ButtonSectionProps): JSX.Element {
return (
  <View style={styles.buttonContainer}>
    <Button title={title} color={'#4169e1'}></Button>
  </View>
)
}

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      { title && <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : '#4169e1',
          },
        ]}>
        {title}
      </Text> }
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#4169e1' : '#ffffff',
    flex: 1
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? '#4169e1' : '#ffffff',
          }}>
             <Image source={require('./img/appflowpackage.png')} style={{
    width: 100,
    height: 100,
    marginTop: 20,
    marginLeft: '35%',
    resizeMode: 'contain'
  }}/>
          <Section title="Appflow">
            The <Text style={styles.highlight}>easiest</Text> way to build and ship mobile apps.
          </Section>
          <Section>
            📦 Cloud native <Text style={styles.highlight}>iOS and Android</Text> builds
          </Section>
          <Section>
            ⬆️ Upload to <Text style={styles.highlight}>Google Play Store</Text> and <Text style={styles.highlight}>Apple App Store</Text>
          </Section>
          <Section>
            🚀 <Text style={styles.highlight}>Automate</Text> your mobile app delivery
          </Section>
          <ButtonSection title="Get Started"></ButtonSection>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 42,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
    color: '#4169e1'
  },
  buttonContainer: {
    marginTop: 32,
    flex: 1,
    alignItems: 'center'
  }
});

export default App;
