import React, {useState} from 'react';
import {View,StyleSheet, Text, TextInput, Button} from 'react-native';

export default function Index() {
    const [ImcResultado, setImcResultado] = useState('');
    const [ImcResultadoNum, setImcResultadoNum] = useState('');
    const [formDato, setFormDato] = useState({});
    const  iniciar = () =>{
        if(!formDato.Peso || !formDato.Estatura){
            console.log("llenar los datos");

        } else {
            // errores.correo = true;
            console.log("daniel2");
            let pesoAux = formDato.Peso;
            let estaturaAux = formDato.Estatura;
            let imc = pesoAux/((estaturaAux)^2);
            console.log(imc);
            if (imc < 18.5) { 
                setImcResultado('Bajo peso');
            }
            if (imc <= 24.9 && imc >= 18.5) {
                setImcResultado('Normal');
            }
            if (imc >= 25.0 && imc <= 29.9) {
                setImcResultado('Sobrepeso');
            }
            if (imc >= 30.0) {
                setImcResultado('Obeso');
            }
            setImcResultadoNum(imc);
        }
    }
    const onChange = (e, tipo)=>{
        setFormDato({...formDato, [tipo]: e.nativeEvent.text});
    }
    return (
        <View>
            <View style={styles.TextInput}>
                <Text>Ingrese Peso:<Text style={styles.RedText}>(kg)</Text></Text>
                <TextInput      
                    style={{ borderColor: 'gray', borderWidth: 1, width: 200 }}
                    placeholder="60.5" 
                    placeholderTextColor="#969696"
                    keyboardType={'numeric'}
                    onChange= {(e) => onChange(e, "Peso")}/>
            </View>
            <View style={styles.TextInput}>
                <Text>Ingrese Estatura:<Text style={styles.RedText}>(m)</Text></Text>
                <TextInput  
                    style={{ borderColor: 'gray', borderWidth: 1, width: 200 }}
                    placeholder="1.70" 
                    placeholderTextColor="#969696"
                    keyboardType={'numeric'}
                    onChange= {(e) => onChange(e, "Estatura")}/>
            </View>
            <Button title="Calcular IMC" onPress={iniciar}/>
            <View style={styles.Resul}>
                <Text  style={styles.titleText}>Nivel de Peso:</Text>
                <Text style={styles.GreenText}>{ImcResultado ? ImcResultado : null}</Text>
                <Text  style={styles.titleText}>IMC:</Text>
                <Text>{ImcResultadoNum ? ImcResultadoNum : null}</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    titleText: {
      fontSize: 20,
      fontWeight: "bold"
    },
    RedText: {
        color: 'red'
    },
    GreenText: {
        color: '#0778bf',
        fontSize: 20,
        fontWeight: "bold"
    },
    TextInput: {
        marginBottom: 10
    },
    Resul: {
        marginTop: 15,
        marginBottom: 20
    }
});