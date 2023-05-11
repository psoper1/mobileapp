// import React, { useState } from 'react';
// import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
// import * as math from 'mathjs';

// export default function App() {
//   const [displayValue, setDisplayValue] = useState('0');

//   const handleClick = (value) => {
//     setDisplayValue(displayValue === '0' ? value : displayValue + '' + value);
//   };

//   const handleEvaluate = () => {
//     try {
//       const result = math.evaluate(displayValue);
//       setDisplayValue(result.toString());
//     } catch (error) {
//       setDisplayValue('Error');
//     }
//   };

//   const handleClear = () => {
//     setDisplayValue('0');
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter') {
//       handleEvaluate();
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.display}
//         placeholder='0'
//         value={displayValue === '0' ? '' : displayValue}
//         onChangeText={setDisplayValue}
//         onKeyDown={handleKeyPress}
//       />
//       <View style={styles.row}>
//         <TouchableOpacity style={styles.button} onPress={() => handleClick('9')}>
//           <Text style={styles.buttonText}>9</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.button} onPress={() => handleClick('8')}>
//           <Text style={styles.buttonText}>8</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.button} onPress={() => handleClick('7')}>
//           <Text style={styles.buttonText}>7</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.button} onPress={handleClear}>
//           <Text style={styles.buttonText}>C</Text>
//         </TouchableOpacity>
//       </View>
//       <View style={styles.row}>
//         <TouchableOpacity style={styles.button} onPress={() => handleClick('6')}>
//           <Text style={styles.buttonText}>6</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.button} onPress={() => handleClick('5')}>
//           <Text style={styles.buttonText}>5</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.button} onPress={() => handleClick('4')}>
//           <Text style={styles.buttonText}>4</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.button} onPress={() => handleClick('/')}>
//           <Text style={styles.buttonText}>/</Text>
//         </TouchableOpacity>
//       </View>
//       <View style={styles.row}>
//         <TouchableOpacity style={styles.button} onPress={() => handleClick('3')}>
//           <Text style={styles.buttonText}>3</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.button} onPress={() => handleClick('2')}>
//           <Text style={styles.buttonText}>2</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.button} onPress={() => handleClick('1')}>
//           <Text style={styles.buttonText}>1</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.button} onPress={() => handleClick('*')}>
//           <Text style={styles.buttonText}>*</Text>
//         </TouchableOpacity>
//       </View>
//       <View style={styles.row}>
//         <TouchableOpacity style={styles.button} onPress={() => handleClick('0')}>
//           <Text style={styles.buttonText}>0</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.button} onPress={() => handleClick('+')}>
//           <Text style={styles.buttonText}>+</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.button} onPress={() => handleClick('-')}>
//           <Text style={styles.buttonText}>-</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.operationButton} onPress={() => handleClick('+')}>
//           <Text style={styles.buttonText}>+</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.operationButton} onPress={() => handleClick('-')}>
//           <Text style={styles.buttonText}>-</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.operationButton} onPress={handleEvaluate}>
//           <Text style={styles.buttonText}>=</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   calculator: {
//     flex: 1,
//   },
//   display: {
//     flex: 1,
//     backgroundColor: 'lightgray',
//     width: '100%',
//     textAlign: 'right',
//     padding: 10,
//     fontSize: 50,
//   },
//   row: {
//     flexDirection: 'row',
//   },
//   button: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: 'white',
//     borderWidth: 1,
//     borderColor: 'gray',
//   },
//   operationButton: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: 'gray',
//     borderWidth: 1,
//     borderColor: 'black',
//   },
//   buttonText: {
//     fontSize: 36,
//   },
// });