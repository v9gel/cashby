import {
  App,
  Page,
  Navbar,
  Block,
  BlockTitle,
  List,
  ListInput,
  Button,
} from "konsta/react";

import { useForm, SubmitHandler, Controller } from "react-hook-form";

type Inputs = {
  example: string;
};

export default function MyApp() {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  const values = watch();

  return (
    <App theme="ios">
      <Page>
        <Navbar title="My App" />
        <Block>
          <BlockTitle>Default</BlockTitle>
          <List strongIos insetIos>
            <Controller
              control={control}
              name="example"
              defaultValue={"текст"}
              render={({ field: { value, onChange } }) => (
                <ListInput
                  label="Обычный"
                  type="text"
                  placeholder="Обычный"
                  value={value}
                  onChange={onChange}
                />
              )}
            />
          </List>
          {JSON.stringify(values)}
          <Button onClick={handleSubmit(onSubmit)}>Кнопка</Button>
        </Block>
      </Page>
    </App>
  );
}
