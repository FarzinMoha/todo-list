import { Button, Input, HStack } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import pallet from "../pallet";
import { ChangeEventHandler, useCallback, useState } from "react";

type addTodoProps = {
  setTodos: React.Dispatch<
    React.SetStateAction<{ id: string; body: string }[]>
  >;
  todos: { id: string; body: string }[];
};

const AddTodo = ({ setTodos, todos }: addTodoProps) => {
  const [newTodo, setNewTodo] = useState("");
  const toast = useToast();
  const changeHandler: ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      setNewTodo(e.target.value);
    },
    [newTodo]
  );
  const clickHandler = useCallback(() => {
    if (!newTodo.length) {
      toast({
        title: "Access denide",
        description: "You have not write any todo",
        status: "error",
        duration: 1500,
        isClosable: true,
      });
      return;
    }
    const lastId = todos.length ? Number(todos[todos.length - 1].id) + 1 : 1;
    setTodos([...todos, { id: lastId.toString(), body: newTodo }]);
    setNewTodo("");
  }, [newTodo]);
  return (
    <HStack
      w="100%"
      maxW={{ base: "100%", sm: "80vw", lg: "50vw", xl: "40vw" }}
    >
      <Input
        variant="filled"
        placeholder="Add a todo to list"
        value={newTodo}
        onChange={changeHandler}
      />
      <Button
        onClick={clickHandler}
        bg={pallet.primary}
        color={pallet.secondry}
        _hover={{ background: pallet.primary2 }}
        px="10"
      >
        add
      </Button>
    </HStack>
  );
};

export default AddTodo;
