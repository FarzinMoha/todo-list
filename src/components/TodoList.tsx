import { Badge, HStack, IconButton, Spacer, StackDivider, Text, VStack } from "@chakra-ui/react";
import { BsTrash3Fill } from "react-icons/bs";
import pallet from "../pallet";
import { useCallback } from "react";

type todoListProps = {
    todos:{id:string,body:string}[]
    setTodos: React.Dispatch<React.SetStateAction<{id:string,body:string}[]>>  
}

const TodoList = ({todos,setTodos}:todoListProps) => {

    const deletHandler = useCallback((id:string):any=>{
        setTodos(todos.filter((todo:{id:string,body:string}) => todo.id!==id))
    },[todos])

    if(!todos.length){
        return (
            <Badge py='10' px='20' borderRadius='10px' bg={pallet.primary2} fontSize='20px'>
                there is nothing
            </Badge>
        )
    }

  return (
    <VStack
    divider={<StackDivider/>} borderWidth='2px' borderColor='gray.300' p='4' borderRadius='lg'
    mt='20px'
    w='100%'
    maxW={{base:'100%' , sm:'80vw' , lg:'50vw', xl:'40vw'}}
    alignItems='stretch'
    >
      {todos?.map((todo: any , index:number) => (
        <HStack key={index}>
          <Text>{todo.body}</Text>
          <Spacer/>
          <IconButton onClick={()=>deletHandler(todo.id)} bg={pallet.primary} color={pallet.secondry} _hover={{background:pallet.primary2}} isRound icon={<BsTrash3Fill />} aria-label="" />
        </HStack>
      ))}
    </VStack>
  );
};

export default TodoList;
