import React from "react";

import { postProduct } from "../../../api";
import { useMutation, useQueryClient } from "react-query";
//import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Formik, FieldArray } from "formik";
import {
  Text,
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Select,
} from "@chakra-ui/react";

import validationSchema from "./validation";
import { message } from "antd";

function NewProduct() {
  const queryClient = useQueryClient();
  const newProductMutation = useMutation(postProduct, {
    onSuccess: () => queryClient.invalidateQueries("products"),
  });
  const handleSubmit = async (values, bag) => {
    console.log(values);
    message.loading({ content: "Loading...", key: "product_added" });
    // values.photos = JSON.stringify(values.photos);
    const newValues = { ...values, photos: JSON.stringify(values.photos) };

    newProductMutation.mutate(newValues, {
      onSuccess: () => {
        console.log("success");

        message.success({
          content: "The product successfully added",
          key: "product_added",
          duration: 2,
        });
      },
    });
  };
  return (
    <div>
      <Text fontSize="2xl">New Product</Text>
      <Formik
        initialValues={{
          title: "",
          category: "",
          description: "",
          price: "",
          photos: [],
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({
          handleSubmit,
          errors,
          touched,
          handleChange,
          handleBlur,
          values,
          isSubmitting,
        }) => (
          <>
            <Box>
              <Box my="5" textAlign={"left"}>
                <form onSubmit={handleSubmit}>
                  <FormControl>
                    <FormLabel>Title</FormLabel>
                    <Input
                      name="title"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      disabled={isSubmitting}
                      value={values.title}
                      isInvalid={touched.title && errors.title}
                    />
                    {touched.title && errors.title && (
                      <Text color="red">{errors.title}</Text>
                    )}
                  </FormControl>
                  <FormControl>
                    <FormLabel>Category</FormLabel>
                    {/* <Input
                      name="category"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      disabled={isSubmitting}
                      value={values.category}
                      isInvalid={touched.category && errors.category}
                    /> */}
                    <Select
                      placeholder="Bir Gategori seçiniz"
                      name="category"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      disabled={isSubmitting}
                      value={values.category}
                      isInvalid={touched.category && errors.category}
                    >
                      <option value="Fotoğraf Makinesi">
                        Fotoğraf Makinesi
                      </option>
                      <option value="Multikopter">Multikopter</option>
                      <option value="3d Yazıcılar">3d Yazıcılar</option>
                      <option value="Filamentler">Filamentler</option>
                    </Select>
                    {touched.category && errors.category && (
                      <Text color="red">{errors.category}</Text>
                    )}
                  </FormControl>
                  <FormControl mt="4">
                    <FormLabel>Description</FormLabel>
                    <Textarea
                      name="description"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.description}
                      disabled={isSubmitting}
                      isInvalid={touched.description && errors.description}
                    />
                    {touched.title && errors.title && (
                      <Text color="red">{errors.description}</Text>
                    )}
                  </FormControl>
                  <FormControl mt="4">
                    <FormLabel>Price</FormLabel>
                    <Input
                      name="price"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      disabled={isSubmitting}
                      value={values.price}
                      isInvalid={touched.price && errors.price}
                    />
                    {touched.price && errors.price && (
                      <Text color="red">{errors.price}</Text>
                    )}
                  </FormControl>
                  <FormControl mt="4">
                    <FormLabel>Photos</FormLabel>
                    <FieldArray
                      name="photos"
                      render={(arrayHelpers) => (
                        <div>
                          {values.photos &&
                            values.photos.map((photo, index) => (
                              <div key={index}>
                                <Input
                                  name={`photos.${index}`}
                                  value={photo}
                                  disabled={isSubmitting}
                                  onChange={handleChange}
                                  width="3xl"
                                />
                                <Button
                                  mx="2"
                                  my="5"
                                  type="button"
                                  colorScheme={"red"}
                                  onClick={() => arrayHelpers.remove(index)}
                                >
                                  Remove
                                </Button>
                              </div>
                            ))}
                          <Button
                            mx="2"
                            my="5"
                            onClick={() => arrayHelpers.push("")}
                          >
                            Add a Photo
                          </Button>
                        </div>
                      )}
                    />
                  </FormControl>
                  <Button
                    mt={4}
                    width="full"
                    type="submit"
                    isLoading={isSubmitting}
                  >
                    Save
                  </Button>
                </form>
              </Box>
            </Box>
          </>
        )}
      </Formik>
    </div>
  );
}

export default NewProduct;
