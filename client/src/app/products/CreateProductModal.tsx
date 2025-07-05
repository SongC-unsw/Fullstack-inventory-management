import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { v4 } from "uuid";
import { useState } from "react";
import { TextField, InputLabel, Button } from "@mui/material";

type ProductFormData = {
  name: string;
  price: number;
  stockQuantity: number;
  rating: number;
};

type CreateProductModalProps = {
  isModalOpen: boolean;
  setIsModalOpen: (open: boolean) => void;
  onCreateProduct: (product: ProductFormData) => void;
};

const CreateProductModal = ({
  isModalOpen,
  setIsModalOpen,
  onCreateProduct,
}: CreateProductModalProps) => {
  const [formData, setFormData] = useState({
    productId: v4(),
    name: "",
    price: 0,
    stockQuantity: 0,
    rating: 0,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    onCreateProduct(formData);
    console.log(formData);
    setIsModalOpen(false);
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create New Product</DialogTitle>
          <DialogDescription>
            Fill in the details to create a new product
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid w-full items-center gap-1.5">
            <InputLabel htmlFor="name">Name</InputLabel>
            <TextField
              id="name"
              value={formData.name}
              placeholder="Enter product name"
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />
          </div>

          <div className="grid w-full items-center gap-1.5">
            <InputLabel htmlFor="price">Price</InputLabel>
            <TextField
              id="price"
              type="number"
              inputProps={{ step: "0.01" }}
              value={formData.price}
              onChange={(e) =>
                setFormData({ ...formData, price: Number(e.target.value) })
              }
              required
            />
          </div>

          <div className="grid w-full items-center gap-1.5">
            <InputLabel htmlFor="stockQuantity">Stock Quantity</InputLabel>
            <TextField
              id="stockQuantity"
              type="number"
              value={formData.stockQuantity}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  stockQuantity: Number(e.target.value),
                })
              }
              required
            />
          </div>

          <div className="grid w-full items-center gap-1.5">
            <InputLabel htmlFor="rating">Rating (1-5)</InputLabel>
            <TextField
              id="rating"
              type="number"
              inputProps={{ min: "1", max: "5" }}
              value={formData.rating}
              onChange={(e) =>
                setFormData({ ...formData, rating: Number(e.target.value) })
              }
              required
            />
          </div>

          <div className="flex justify-end space-x-2 pt-4">
            <Button variant="outlined" onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
            <Button type="submit">Create Product</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateProductModal;
