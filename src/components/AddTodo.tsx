import { Button, HStack, Input, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { nanoid } from 'nanoid'
import { TodoItemType } from '../types'

interface Props {
  addTodo: any
}

const AddTodo = ({ addTodo }: Props) => {
  const [newTodo, setNewTodo] = useState('')
  const toast = useToast()
  const handleSubmit = (e: any) => {
    e.preventDefault()

    if (!newTodo) {
      toast({
        title: 'No Content',
        status: 'error',
        duration: 5000,
        isClosable: true
      })
      return
    }

    const todo: TodoItemType = {
      id: nanoid(),
      body: newTodo
    }
    addTodo(todo)
    setNewTodo('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <HStack mt={8}>
        <Input
          value={newTodo}
          variant="filled"
          placeholder="Add a Todo Item..."
          onChange={(e: any) => setNewTodo(e.target.value)}
        />
        <Button colorScheme="pink" px={8} type="submit">
          Add Todo
        </Button>
      </HStack>
    </form>
  )
}

export default AddTodo
