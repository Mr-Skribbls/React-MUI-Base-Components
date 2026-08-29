import { Box, Button, Stack, Typography } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { ActionType, useImducer } from './useImducer';

interface Pet {
  name: string;
  species: string;
}

interface State {
  pets: Pet[];
}

const ImducerDemo = () => {
  const [state, dispatch] = useImducer<State>({ pets: [{ name: 'Cat', species: 'Felis catus' }] });

  return (
    <Stack spacing={2} maxWidth={480}>
      <Box>
        <Typography variant="overline">State</Typography>
        <pre>{JSON.stringify(state, null, 2)}</pre>
      </Box>
      <Stack direction="row" spacing={1}>
        <Button
          variant="outlined"
          onClick={() =>
            dispatch({
              type: ActionType.UPDATE,
              updateFn: (prev) => ({ pets: [...prev.pets, { name: 'Dog', species: 'Canis lupus familiaris' }] }),
            })
          }
        >
          UPDATE
        </Button>
        <Button
          variant="outlined"
          onClick={() =>
            dispatch({
              type: ActionType.DRAFT,
              draftFn: (draft) => {
                draft.pets.push({ name: 'Parrot', species: 'Psittacus erithacus' });
              },
            })
          }
        >
          DRAFT
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => dispatch({ type: ActionType.SET, value: { pets: [] } })}
        >
          SET
        </Button>
      </Stack>
    </Stack>
  );
};

const meta: Meta<typeof ImducerDemo> = {
  title: 'Base/useImducer',
  component: ImducerDemo,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ImducerDemo>;

export const Default: Story = {};