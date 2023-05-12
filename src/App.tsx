import { Heading, IconButton, VStack, useColorMode } from "@chakra-ui/react";
import {BsFillSunFill , BsFillMoonStarsFill} from 'react-icons/bs'
import "./App.css";
import pallet from "./pallet";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import { useState } from "react";

const initialTodos = [
  { id: '1', body: "get beard" },
  { id: '2', body: "get butter" },
];

const App = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const [todos , setTodos] = useState(initialTodos)
  return (
    <VStack p='4'>
      <IconButton onClick={toggleColorMode} alignSelf='flex-end' bg={pallet.primary} color={pallet.secondry} _hover={{background:pallet.primary2}} isRound icon={colorMode=== 'dark' ? <BsFillSunFill /> : <BsFillMoonStarsFill />} aria-label={"change mode"} />
      <Heading mb='96' fontWeight='extrabold' fontSize='5xl' bgGradient={`linear(to-r , ${pallet.primary} , ${pallet.secondry})`} bgClip='text'>Todo Application</Heading>
      <AddTodo setTodos={setTodos} todos={todos}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </VStack>
  );
}

export default App;
