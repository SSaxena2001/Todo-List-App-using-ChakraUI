import React from 'react'
import {
  HStack,
  VStack,
  Text,
  IconButton,
  StackDivider,
  Spacer,
  Badge
} from '@chakra-ui/react'
import { FaTrash } from 'react-icons/fa'
import { TodoItemType } from '../types'

interface Props {
  todos: TodoItemType[]
  deleteItem: any
}

const TodoList = ({ todos, deleteItem }: Props) => {
  if (!todos.length) {
    return (
      <Badge colorScheme="green" p="4" m="4" borderRadius="lg">
        No Todo's, yay!!
      </Badge>
    )
  }

  return (
    <VStack
      divider={<StackDivider />}
      borderColor="gray.100"
      borderWidth="2px"
      p={4}
      borderRadius="lg"
      w="100%"
      maxW={{ base: '90vw', sm: '80vw', lg: '50vw', xl: '40vw' }}
      alignItems="stretch"
    >
      {todos.map(({ id, body }: TodoItemType) => (
        <HStack key={id} alignItems="center" py={2} px={4}>
          <Text>{body}</Text>
          <Spacer />
          <IconButton
            aria-label={`delete-${id}`}
            icon={<FaTrash />}
            isRound={true}
            onClick={() => deleteItem(id)}
          />
        </HStack>
      ))}
    </VStack>
  )
}

export default TodoList
