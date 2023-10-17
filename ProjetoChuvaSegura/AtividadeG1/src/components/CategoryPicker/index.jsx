import React from "react";
import { Picker } from "@react-native-picker/picker";
import { Controller } from "react-hook-form";
import { PickerContainer, ErrorText } from './styles';

const CategoryPicker = ({ control, value, onChange, errors }) => {
    return (
        <>
            <PickerContainer>
                <Controller
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <Picker
                            selectedValue={value}
                            onValueChange={onChange}
                        >
                            <Picker.Item label="Enchente" value="enchente" />
                            <Picker.Item label="Deslizamento" value="deslizamento" />
                            <Picker.Item label="Bloqueio" value="bloqueio" />
                        </Picker>
                    )}
                    name="category"
                />
            </PickerContainer>
            
        </>
    );
};

export default CategoryPicker;
