import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

export default function TableAux() {
    const state = {
        tableHead: ['IMC', 'Nivel de peso'],
        tableData: [
          ['Por debajo de 18.5', 'Bajo peso'],
          ['18.5 – 24.9', 'Normal'],
          ['25.0 – 29.9', 'Sobrepeso'],
          ['30.0 o más', 'Obeso']
        ]
    }
    return (
        <View>
            <View  style={{ width: 300 }}>
                <Table borderStyle={{borderWidth: 2, borderColor: '#dee2e6'}}>
                    <Row data={state.tableHead} style={styles.head} textStyle={styles.textHead}/>
                    <Rows data={state.tableData} textStyle={styles.textBody}/>
                </Table>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: { 
        backgroundColor: '#fff' 
    },
    head: {  
        height: 40,  backgroundColor: '#f1f8ff'  
    },
    wrapper: { 
        flexDirection: 'row' 
    },
    title: { 
        flex: 1, 
        backgroundColor: '#f6f8fa',
        fontWeight: "bold",
        fontSize: 20,
    },
    row: {  
        height: 28  
    },
    textHead: { 
        textAlign: 'center',
        fontWeight: "bold",
    },
    textBody: { 
        textAlign: 'center',
    }
});