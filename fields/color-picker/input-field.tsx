import { HexColorPicker } from 'react-colorful';
import { useFieldType } from 'payload/components/forms';
import React, { FC } from 'react';

export const InputField: FC<{ path: string }> = ({ path }) => {
  const {
    value,
    setValue,
  }: { value: string; setValue: (val: unknown, modifyForm?: boolean) => void } =
    useFieldType({ path });

  return (
    <>
      <p className="field-description">
        This is the color that will be used as the block background
      </p>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '2rem',
          marginBottom: '2rem',
        }}
      >
        <HexColorPicker
          color={value}
          onChange={(pickedColor) => {
            setValue(pickedColor);
          }}
        />
        <div
          style={{
            backgroundColor: value,
            height: '100px',
            width: '100px',
            borderRadius: '50%',
          }}
        />
      </div>
    </>
  );
};
