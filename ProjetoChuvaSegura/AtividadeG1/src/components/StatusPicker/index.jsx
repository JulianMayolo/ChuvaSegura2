import React from "react";
import { Picker } from "@react-native-picker/picker";
import { Controller } from "react-hook-form";
import { PickerContainer, ErrorText } from './styles';

const StatusPicker = ({ control, value, onChange, errors }) => {
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
                            <Picker.Item label="Preventivo" value="preventivo" />
                            <Picker.Item label="Ocorrido" value="ocorrido" />
                        </Picker>
                    )}
                    name="status"
                />
            </PickerContainer>
        </>
    );
};

export default StatusPicker;
