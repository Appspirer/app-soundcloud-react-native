import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Music, Search, Account } from '../screens';
import Icons from '../themes/Icons';
import { TouchableOpacity, View, Text, Dimensions, Animated } from 'react-native'
import Colors from '../themes/Colors';
import { useEffect, useRef, useState } from 'react';
import { EventRegister } from 'react-native-event-listeners'

const { height, width } = Dimensions.get('window')
const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  const [showBar, setShowBar] = useState(false)
  const [musicBar, setMusicBar] = useState(false)
  const playBar = useRef(new Animated.Value(0)).current

  useEffect(() => {
    EventRegister.addEventListener("Play", (data) => {
      setShowBar(true)
      setMusicBar(true)
    })
    if (musicBar) {
      Animated.timing(playBar, {
        toValue: width,
        duration: 1000 * 3,
        useNativeDriver: false
      }).start()
    }
  }, [musicBar])

  const onPlay = () => {
    if (musicBar) {
      playBar.stopAnimation()
      setMusicBar(false)
    } else {
      setMusicBar(true)
    }
  }

  const MyTabBar = ({ state, descriptors, navigation }) => {

    const focused = state.index

    const renderMusicBar = () => {
      return (
        <View style={{ height: 50, backgroundColor: Colors.white, marginBottom: 1 }}>
          <View style={{ height: 3, width: width, backgroundColor: Colors.border }}>
            <Animated.View style={{ height: 3, backgroundColor: Colors.orange, width: playBar }} />
          </View>
          <View style={{ flexDirection: "row", justifyContent: 'space-between', alignItems: 'center', height: 48, marginHorizontal: 16 }}>
            <View style={{ width: 20 }} />
            <View style={{ justifyContent: "center", alignItems: 'center' }}>
              <Text style={{ fontSize: 12, fontWeight: 'bold', color: Colors.black_text }}>All Mine</Text>
              <Text style={{ fontSize: 12, fontWeight: '500', color: Colors.orange }}>Kanye West</Text>
            </View>
            <TouchableOpacity onPress={() => onPlay()}>
              {Icons.Icons({ name: "play_circle", height: 20, width: 20 })}
            </TouchableOpacity>
          </View>
        </View>
      )
    }

    return (
      <View style={{ backgroundColor: Colors.transparent }}>
        {showBar ? renderMusicBar() : <></>}
        <View style={{
          flexDirection: 'row',
          height: 50,
          backgroundColor: Colors.white,
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 32
        }}>
          <TouchableOpacity style={{ width: 50, height: 30, alignItems: 'center', justifyContent:'center' }} onPress={() => navigation.navigate("Home")}>
            {Icons.Icons({ name: focused === 0 ? 'home_focus' : 'home', height: 20, width: 18 })}
          </TouchableOpacity>
          <TouchableOpacity style={{ width: 50, height: 30, alignItems: 'center', justifyContent:'center' }} onPress={() => navigation.navigate("Music")}>
            {Icons.Icons({ name: focused === 1 ? 'music_focus' : 'music', height: 18, width: 18 })}
          </TouchableOpacity>
          <TouchableOpacity style={{ width: 50, height: 30, alignItems: 'center', justifyContent:'center' }} onPress={() => navigation.navigate("Search")}>
            {Icons.Icons({ name: focused === 2 ? 'search_focus' : 'search', height: 18, width: 18 })}
          </TouchableOpacity>
          <TouchableOpacity style={{ width: 50, height: 30, alignItems: 'center', justifyContent:'center' }} onPress={() => navigation.navigate("Account")}>
            {Icons.Icons({ name: focused === 3 ? 'profile_focus' : 'profile', height: 18, width: 16 })}
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false
      }}
      tabBar={props => <MyTabBar {...props} />}
    >
      <Tab.Screen name="Home" component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              {Icons.Icons({ name: focused ? 'home_focus' : 'home', height: 20, width: 18 })}
            </View>
          )
        }}
      />
      <Tab.Screen name="Music" component={Music}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              {Icons.Icons({ name: focused ? 'music_focus' : 'music', height: 18, width: 18 })}
            </View>
          )
        }}
      />
      <Tab.Screen name="Search" component={Search}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              {Icons.Icons({ name: focused ? 'search_focus' : 'search', height: 18, width: 18 })}
            </View>
          )
        }}
      />
      <Tab.Screen name="Account" component={Account}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              {Icons.Icons({ name: focused ? 'profile_focus' : 'profile', height: 18, width: 16 })}
            </View>
          )
        }}
      />
    </Tab.Navigator>
  );
}