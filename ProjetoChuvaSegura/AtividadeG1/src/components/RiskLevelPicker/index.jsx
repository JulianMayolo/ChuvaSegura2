import React from "react";
import { Picker } from "@react-native-picker/picker";
import { Controller } from "react-hook-form";
import { PickerContainer, ErrorText } from './styles';

const RiskLevelPicker = ({ control, value, onChange, errors }) => {
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
                            <Picker.Item label="1 - Baixo" value="1" />
                            <Picker.Item label="2 - Médio" value="2" />
                            <Picker.Item label="3 - Moderado" value="3" />
                            <Picker.Item label="4 - Alto" value="4" />
                            <Picker.Item label="5 - Perigoso" value="5" />
                        </Picker>
                    )}
                    name="risk_level"
                />
            </PickerContainer>
        </>
    );
};

export default RiskLevelPicker;
