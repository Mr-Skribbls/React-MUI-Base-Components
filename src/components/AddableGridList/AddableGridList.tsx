import type { ReactNode } from 'react';
import { GridList } from '../GridList';
import type { GridConfiguration, GridData, GridEvents } from '../GridList';
import style from './AddableGridList.module.css';

export interface AddableGridListProps<T extends GridData> {
  data: T[];
  addItemDialog: ReactNode;
  configuration?: GridConfiguration<T>;
  events?: GridEvents;
}

export const AddableGridList = <T extends GridData>({
  data,
  addItemDialog,
  configuration,
  events,
}: AddableGridListProps<T>) => {

  return (
    <div className={style.addableGridList}>
      <div>
        <div>
          <GridList<T>
            data={data}
            configuration={configuration}
            events={events} />
        </div>
      </div>
      { addItemDialog }
    </div>
  );
};

export default AddableGridList;