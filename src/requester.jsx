import React, { useState } from "react";

import { Text, View, TextInput, TouchableOpacity, FlatList } from "react-native";

import styles from "./utils/style-sheet";

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    },
];

const Item = ({ title }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
);


function _renderList(status) {
    const renderItem = ({ item }) => (
        <Item title={item.title} />
    );
    if (status) {
        return (
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />);

    }
    else
        return null;
}

function RequesterPage() {


    const [hide, onChangeHide] = React.useState(false);

    return (
        <View
            style={styles.container}
        >
            <TextInput
                style={styles.textInput}
                placeholder="Search"
            >


            </TextInput>

            <TouchableOpacity
                style={{
                    padding: 10,
                    margin: 12,
                    marginRight: 40,
                    marginLeft: 40,
                    marginTop: 10,
                    paddingTop: 10,
                    paddingBottom: 10,
                    backgroundColor: '#1E6738',
                    borderRadius: 10,
                    borderWidth: 1,
                    borderColor: '#fff'
                }}
                onPress={() => {

                    onChangeHide(true);

                }}
            >
                <Text
                    style={{
                        color: '#fff',
                        textAlign: "center"
                    }}
                >
                    Search
                </Text>
            </TouchableOpacity>


            {
                _renderList(hide)
            }

        </View>
    );
}

export default RequesterPage;