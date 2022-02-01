import React from 'react';
import { StyleSheet, Text, View, SafeAreaView,Image } from 'react-native';
import { TextInput,Button } from 'react-native-paper';
import { useState,useEffect } from 'react';

export default function App() {
	const [imc, setImc] = useState("-");
	const [legenda, setLegenda] = useState("-");

	const [peso, setPeso] = useState(0);
	const [altura, setAltura] = useState(0);

	const calcularIMC = () => {
	  // const imc = ( handlePeso / ( handleAltura * handleAltura ) )
		
		const ResultIMC = (peso / ( altura * altura )).toFixed(1)
		if(ResultIMC < 18.5){
			setLegenda('Peso abaixo Do normal')
		}else if(ResultIMC >= 18.5 && ResultIMC < 24.9){
		 	setLegenda('Peso está normal ')
		 }else if(ResultIMC >= 25 && ResultIMC < 29.9){
		 	setLegenda('Pré Obsidade')
		 }else if( ResultIMC >= 30 && ResultIMC < 34.9){
			setLegenda('Obsidade Grau 1')
		 }else if( ResultIMC >= 35 && ResultIMC < 39.9){
			setLegenda('Obsidade Grau 2')
		 }else if( ResultIMC >= 40){
			setLegenda('Obsidade Grau 3 Ou Móbida')
		 }

		setImc(ResultIMC)

	}

	



  return (
	  <SafeAreaView style={ styles.container } >
      		<Text style={ styles.legend }>Seu IMC</Text>
		<View >
			<Text style={ styles.Resulatado }> {imc} </Text>
			<Text style={ styles.ResulatadoDiagnostico }> {legenda} </Text>
		</View>
		<View>
			<TextInput 
				label="Digite sue peso"  
				style={ styles.Peso } 
				onChangeText={t =>setPeso(t) } 
				
			/>
			
			<TextInput 
				
				label="Digite sua altura"  
				pstyle={ styles.Altura } 
				onChangeText={t =>setAltura(t)} 
					
			/>
			<Button style={styles.Buttom}
				mode='contained'
				onPress={ calcularIMC }
			>
				Calcular IMC
			</Button>
			<Image 
				style={ styles.imagem } 
				source={{uri:'https://media.giphy.com/media/3o6MbcKDTOzB8Kz0He/giphy.gif'}} 
					
			/>
		</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
	container:{
		flex: 1,
		padding: 48,
	},
	legend:{
		textAlign:"center",
		fontSize: 30,
		fontWeight:"bold",
		marginBottom: 20
	},
	Resulatado:{
		textAlign:"center",
		fontSize:35,
		fontWeight:"bold",
		marginBottom: 20
		
	},
	ResulatadoDiagnostico:{
		textAlign:"center",
		fontSize:20,
		marginBottom: 20,
		backgroundColor:"#48145e",
		padding: 30,
		borderRadius:15
	},
	Peso:{
		marginBottom:30,
		borderColor:"#ccc",
		borderWidth:1,
	},
	Altura:{
		borderColor:"#ccc",
		borderWidth:1,
	},
	Buttom:{
		margin: 50,
		backgroundColor:"#8e2cb8",

	},
	imagem:{
		width: 250,
		height: 250,
		marginLeft:20,
	}
})

