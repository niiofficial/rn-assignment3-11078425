import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, FlatList, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const horizontalData = [
    {
      id: '1',
      title: 'Code',
      subtitle: 'Task 1',
      image: require('./imgs/img1.png'),
    },
    {
      id: '2',
      title: 'Study',
      subtitle: 'Task 2',
      image: require('./imgs/img2.png'),
    },
    {
      id: '3',
      title: 'Run',
      subtitle: 'Task 3',
      image: require('./imgs/run.png'),
    },
    {
      id: '4',
      title: 'Read',
      subtitle: 'Task 4',
      image: require('./imgs/img3.png'),
    },
    {
      id: '5',
      title: 'Write',
      subtitle: 'Task 5',
      image: require('./imgs/img3.png'),
    },
    {
      id: '6',
      title: 'Exercise',
      subtitle: 'Task 6',
      image: require('./imgs/img2.png'),
    },
    {
      id: '7',
      title: 'Cook',
      subtitle: 'Task 7',
      image: require('./imgs/img1.png'),
    },
    {
      id: '8',
      title: 'Sleep',
      subtitle: 'Task 8',
      image: require('./imgs/img2.png'),
    },
  ];

  const verticalData = [
    { id: '1', title: 'Design UI/UX for athenaH', time: '10:00 AM' },
    { id: '2', title: 'Review Lecture Slides', time: '11:00 AM' },
    { id: '3', title: 'Client Call', time: '12:00 PM' },
    { id: '4', title: 'Lunch Break', time: '1:00 PM' },
    { id: '5', title: 'Pitch Idea To Client', time: '2:00 PM' },
    { id: '6', title: 'Write Documentation', time: '3:00 PM' },
    { id: '7', title: 'Team Sync', time: '4:00 PM' },
    { id: '8', title: 'Workout', time: '5:00 PM' },
    { id: '9', title: 'Dinner', time: '6:00 PM' },
    { id: '10', title: 'Read Book', time: '7:00 PM' },
    { id: '11', title: 'Code Practice', time: '8:00 PM' },
    { id: '12', title: 'Watch Movie', time: '9:00 PM' },
    { id: '13', title: 'Prepare for Tomorrow', time: '10:00 PM' },
    { id: '14', title: 'Play the Keyboard', time: '10:30 PM' },
    { id: '15', title: 'Sleep', time: '11:00 PM' },
  ];

  const renderHorizontalItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.itemImage} />
      <Text style={styles.itemTitle}>{item.title}</Text>
      <Text style={styles.itemSubtitle}>{item.subtitle}</Text>
    </View>
  );

  const renderVerticalItem = ({ item }) => (
    <View style={styles.verticalItemContainer}>
      <Text style={styles.verticalItemTitle}>{item.title}</Text>
      <Text style={styles.verticalItemTime}>{item.time}</Text>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity style={styles.headerContainer}>
        <Image source={require('./imgs/img3.png')} style={styles.headerImage} />
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>Hello, Devs</Text>
          <View style={styles.tasksContainer}>
            <Text style={styles.tasksText}>14 Tasks today</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.searchBarContainer}>
        <Image source={require('./imgs/search.png.png')} style={styles.searchLogo} />
        <Image source={require('./imgs/settings-10-128.png')} style={styles.settingsLogo} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          placeholderTextColor="#000000"
        />
      </TouchableOpacity>
      <View style={styles.categoriesContainer}>
        <Text style={styles.heading}>Categories</Text>
      </View>
      <FlatList
        data={horizontalData}
        renderItem={renderHorizontalItem}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatListContainer}
      />
      <View style={styles.ongoingTaskContainer}>
        <Text style={styles.ongoingTaskText}>Ongoing Task</Text>
      </View>
      <FlatList
        data={verticalData}
        renderItem={renderVerticalItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.verticalListContainer}
      />
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    position: 'absolute',
    top: 40,
    left: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  headerImage: {
    position: 'absolute',
    top: 0,
    right: -250,
    width: 50,
    height: 52,
  },
  headerTextContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333',
    fontWeight: '800',
  },
  tasksContainer: {
    marginTop: 2,
    right: 20,
  },
  tasksText: {
    fontSize: 16,
    color: '#666',
  },
  searchBarContainer: {
    position: 'absolute',
    top: 115,
    left: 20,
    right: 0,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fbf9f7',
    borderWidth: 1,
    width: 353,
    height: 49,
    flexDirection: 'row',
  },
  searchLogo: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    right: 90,
    top: 5,
  },
  settingsLogo: {
    width: 50,
    height: 40,
    resizeMode: 'contain',
    left: 150,
    top: 0,
    borderWidth: 2,
  },
  searchInput: {
    fontSize: 16,
    color: '#333',
    padding: 5,
    right: 150,
  },
  categoriesContainer: {
    marginTop: 180,
    marginLeft: 20,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000000',
  },
  flatListContainer: {
    paddingLeft: 20,
    paddingVertical: 20,
  },
  itemContainer: {
    marginRight: 20,
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 10,
    borderRadius: 10,
  },
  itemImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
    resizeMode: 'contain',
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  itemSubtitle: {
    fontSize: 14,
    color: '#666',
  },
  ongoingTaskContainer: {
    marginTop: 20,
    marginLeft: 20,
  },
  ongoingTaskText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000000',
  },
  verticalListContainer: {
    paddingLeft: 20,
    paddingVertical: 20,
  },
  verticalItemContainer: {
    marginBottom: 20,
    backgroundColor: '#f5f5f5',
    padding: 10,
    borderRadius: 10,
  },
  verticalItemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  verticalItemTime: {
    fontSize: 14,
    color: '#666',
  },
});
