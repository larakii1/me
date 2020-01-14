import React from 'react';
import { View } from 'react-native';
import { VictoryPie } from 'victory-native';



const graphicData = [{ y: 10 }, { y: 50 }, { y: 40 }];
const graphicColor = ['#388087', '#6fb3b8', '#badfe7'];

function Home() {
  return (
    <View style={styles.container}>
      <VictoryPie data={graphicData} width={250} height={250} colorScale={graphicColor} innerRadius={50} />
    </View>
  );
}

export default Home;