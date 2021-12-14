import react from "react";
import React from "react";

import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

function ProviderPage() {
    const [noRestrictions, onChangeNoRextrictions] = react.useState();
    const [opentoGeneralResearchAndClinicalCare, onChangeOpentoGeneralResearchAndClinicalCare] = react.useState();
    const [openToHMBResearch, onChangeOpenToHMBResearch] = react.useState();
    const [openToPopulationAndAncestryResearch, onChangeOpenToPopulationAndAncestryResearch] = react.useState();
    const [openToDiseaseSpecific, onChangeOpenToDiseaseSpecific] = react.useState();

    return (
        <View
            style={styles.container}
        >

            <TextInput
                style={
                    {
                        height: 40,
                        margin: 12,
                        borderWidth: 1,
                        padding: 10,
                    }
                }

                placeholder="Please input a data link"
            />

            <TouchableOpacity
                style={
                    {
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
                    }
                }

                onPress={
                    () => {
                        axios({
                            method: "post",
                            url: "",
                            data: {

                            }
                        })
                    }
                }
            >

                <Text
                    style={
                        {
                            color: '#fff',
                            textAlign: "center"
                        }
                    }
                >
                    Upload
                </Text>
            </TouchableOpacity>

            <BouncyCheckbox
                style={
                    {
                        backgroundColor: noRestrictions ? "#34eb83" : "#fff",
                    }
                }
                textStyle={
                    {
                        textDecorationLine: "none"
                    }
                }
                text="noRestrictions"
                isChecked={noRestrictions}
                onPress={
                    () => {
                        onChangeNoRextrictions(!noRestrictions)
                    }
                }
            />

            <BouncyCheckbox
                style={
                    {
                        backgroundColor: opentoGeneralResearchAndClinicalCare ? "#34eb83" : "#fff",
                    }
                }
                textStyle={
                    {
                        textDecorationLine: "none"
                    }
                }
                text="opentoGeneralResearchAndClinicalCare"
                isChecked={opentoGeneralResearchAndClinicalCare}
                onPress={
                    () => {
                        onChangeOpentoGeneralResearchAndClinicalCare(!opentoGeneralResearchAndClinicalCare)
                    }
                }

            />

            <BouncyCheckbox
                style={
                    {
                        backgroundColor: openToHMBResearch ? "#34eb83" : "#fff",
                    }
                }
                textStyle={
                    {
                        textDecorationLine: "none"
                    }
                }
                text="openToHMBResearch"
                isChecked={openToHMBResearch}
                onPress={
                    () => {
                        onChangeOpenToHMBResearch(!openToHMBResearch)
                    }
                }
            />

            <BouncyCheckbox
                style={
                    {
                        backgroundColor: openToPopulationAndAncestryResearch ? "#34eb83" : "#fff",
                    }
                }
                textStyle={
                    {
                        textDecorationLine: "none"
                    }
                }
                text="openToPopulationAndAncestryResearch"
                isChecked={openToPopulationAndAncestryResearch}
                onPress={
                    () => {
                        onChangeOpenToPopulationAndAncestryResearch(!openToPopulationAndAncestryResearch)
                    }
                }
            />

            <BouncyCheckbox
                style={
                    {
                        backgroundColor: openToDiseaseSpecific ? "#34eb83" : "#fff",
                    }
                }
                textStyle={
                    {
                        textDecorationLine: "none"
                    }
                }
                text="openToDiseaseSpecific"
                isChecked={openToDiseaseSpecific}
                onPress={
                    () => {
                        onChangeOpenToDiseaseSpecific(!openToDiseaseSpecific)
                    }
                }
            />


        </View>
    );
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'left',
            justifyContent: 'center',
        },
    }
);

export default ProviderPage;