import React, { useState } from 'react';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { Form, Input } from 'reactstrap';
import ModalStep from './ModalStep';
import Loader from './Loader';
import Modal from './Modal';

const MAX_FILE_SIZE = 102400; // 100KB

const validFileExtensions = { image: ['jpg', 'gif', 'png', 'jpeg', 'svg', 'webp'] };

function isValidFileType(fileName, fileType) {
  return fileName && validFileExtensions[fileType].indexOf(fileName.split('.').pop()) > -1;
}

function AddOrEditEventModal({
  isEditable = false,
  event = {},
  handleClick,
  optionalClassName = '',
  isOpened = true,
}) {
  const stepValidationSchema = Yup.object().shape({
    title: Yup.string().required('Naziv je obavezan!'),
    description: Yup.string().notRequired(),
    start: Yup.date().required('Pocetni datum i vrijeme su obavezni!'),
    end: Yup.date().min(Yup.ref('start'), 'Krajnje vrijeme mmora biti vece od pocetnog!'),
    image: Yup.mixed()
      .test(
        'is-valid-type',
        'Tip fajla koji ste izabrali nije podrzan!',
        (value) => isValidFileType(value && value.name.toLowerCase(), 'image'),
      )
      .test(
        'is-valid-size',
        'MAksimalna dozvoljena velicina slike je 100KB!',
        (value) => value && value.size <= MAX_FILE_SIZE,
      ),
  });
  const eventValidationSchema = Yup.object().shape({
    title: Yup.string().required('Naziv je obavezan!'),
    steps: Yup.array().of(stepValidationSchema).notRequired(),
    description: Yup.string().notRequired(),
    reusable: Yup.bool().notRequired(),
    start: Yup.date().required('Pocetni datum i vrijeme su obavezni!'),
    // .test(
    //   'meeting_on_the_selected_date_already_exists',
    //   t('error_message.content.meeting_already_exists'),
    //   (value) => !chartLabels.includes(reformatToISODateString(new Date(value))),
    // ), provjeriti mozda postoji li vec akcija taj dan u to vrijeme
    end: Yup.date().min(Yup.ref('start'), 'Krajnje vrijeme mmora biti vece od pocetnog!'),
    repeatDays: Yup.array(Yup.string().oneOf(['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun', 'once'])),
    notifyUserBefore: Yup.number(),
    image: Yup.mixed()
      .test(
        'is-valid-type',
        'Tip fajla koji ste izabrali nije podrzan!',
        (value) => isValidFileType(value && value.name.toLowerCase(), 'image'),
      )
      .test(
        'is-valid-size',
        'MAksimalna dozvoljena velicina slike je 100KB!',
        (value) => value && value.size <= MAX_FILE_SIZE,
      ),
  });

  const {
    handleSubmit,
    register,
    control,
    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(eventValidationSchema) });

  return (
    <Modal
      isOpened={isOpened}
      size="lg"
    >
      <ModalStep
        title={`${isEditable ? 'Edit' : 'Create'} event`}
        rightButtonText={isEditable ? 'Save' : 'Create'}
        onRightButtonClick={() => console.log('Save')}
        leftButtonText="Cancel"
        onLeftButtonClick={() => console.log('cancel')}
      >
        <Form
          onSubmit={handleSubmit()}
          className="container"
        >
          <Input
            // placeholder="Naziv"
            {...register('title', { value: event.title })}
            label="Naziv"
          />
        </Form>
      </ModalStep>
    </Modal>
  );
}

export default AddOrEditEventModal;
