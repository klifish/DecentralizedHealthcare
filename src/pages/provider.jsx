import react from "react";
import React from "react";

import { Text, TextInput, TouchableOpacity, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import styles from "../utils/style-sheet";

const ConsentStatements = (props) => (
    <View style={{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: 1
    }}>

        {
            props.values.map((value) => {

                const [checkState, onChangeCheckState] = React.useState(false);

                return (

                    <BouncyCheckbox
                        style={{
                            backgroundColor: "#fff",
                        }}
                        key={value}
                        text={value}
                        isChecked={false}
                        textStyle={{
                            textDecorationLine: "none"
                        }}

                        onPress={
                            () => {
                                props.consentTracing(value, checkState)
                                console.log(checkState)
                                onChangeCheckState(!checkState)
                            }
                        }
                    />
                )
            })
        }

    </View>
);

function ProviderPage() {
    const consentStatements = ["noRestrictions", "opentoGeneralResearchAndClinicalCare", "openToHMBResearch", "openToPopulationAndAncestryResearch", "openToDiseaseSpecific"];
    var consentResult = Object.fromEntries(
        consentStatements.map(
            (value) => [value, ""]
        )
    )

    const consentTracing = (consent, result) => {
        consentResult[consent] = result;
        console.log(consentResult)
    }
    return (
        <ConsentStatements
            values={consentStatements}
            consentTracing={consentTracing}
        />
    );

    const [noRestrictions, onChangeNoRextrictions] = React.useState()

    return (
        <View
            style={styles.container}
        >

            <View>
                <TextInput
                    style={
                        styles.textInput
                    }

                    placeholder="Please input a data link"
                />
            </View>

            <TextInput
                style={
                    styles.textInput
                }

                placeholder="Please input a data link"
            />

            <TouchableOpacity
                style={
                    styles.touchableOpacityStyle
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


            <View
                style={{
                    backgroundColor: '#fff',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                }}
            >
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

                {/* <BouncyCheckbox
                    style={
                        {
                            // backgroundColor: opentoGeneralResearchAndClinicalCare ? "#34eb83" : "#fff",
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

                /> */}

                {/* <BouncyCheckbox
                    style={
                        {
                            // backgroundColor: openToHMBResearch ? "#34eb83" : "#fff",
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
                /> */}

                {/* <BouncyCheckbox
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
                /> */}

                {/* <BouncyCheckbox
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
                /> */}

            </View>



        </View>
    );
}

export default ProviderPage;