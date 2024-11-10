import { FlatList, Image, StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import React from 'react'
import { PACKS_MOCK_DATA } from '../../mockData/PacksMockData';
import { IPacks } from '../../interfaces/IPacks';
import homeScreenStyles from './HomeScreenStyles';
import { formatNumberToIndianFormat } from '../../utils/FormatNumber';
import { Colors } from '../../utils/Colors';
import Icon from 'react-native-vector-icons/AntDesign';

const Packs = () => {
    const {width} = useWindowDimensions();
    const numOfCols = width >= 768 ? 3 : 2;
    const cardWidth = (width - 40) / numOfCols;

    const renderPackContainer = (item:IPacks) => {
        return (
            <View style={homeScreenStyles.packCont}>
                <Image source={item.packIcon} style={homeScreenStyles.packImage} />
                <Text style={homeScreenStyles.packCost}>{formatNumberToIndianFormat(item.packCost)}</Text>
                <Text style={homeScreenStyles.packName}>{item.packTitle}</Text>
                <View style={homeScreenStyles.packSeperator} />
                <View style={homeScreenStyles.seeDetailsCont}>
                    <Text style={homeScreenStyles.seeDetailsText}>See Details</Text>
                    <Icon name='arrowright' size={20} color={Colors.lima} />
                </View>
            </View>
        );
    };

  return (
    <View>
      <FlatList data={PACKS_MOCK_DATA} renderItem={({item})=> renderPackContainer(item)} keyExtractor={(item)=> item.packTitle} numColumns={cardWidth} />
    </View>
  )
}

export default Packs;