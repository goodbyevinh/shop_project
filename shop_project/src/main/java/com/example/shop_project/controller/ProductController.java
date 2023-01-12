package com.example.shop_project.controller;


import com.example.shop_project.dto.ProductDTO;
import com.example.shop_project.payload.response.DataResponse;
import com.example.shop_project.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import javax.annotation.security.RolesAllowed;


@RestController
@RequestMapping("/product")
public class ProductController {
    @Autowired
    ProductService productService;

    @PostMapping("/insert")
    public ResponseEntity<?> insertPrpduct() {
        productService.test();
        return new ResponseEntity<>("test", HttpStatus.OK);
    }
    @GetMapping("/totalpage")
    public ResponseEntity<?> getTotalPage() {
        DataResponse dataResponse = new DataResponse();
        dataResponse.setDesc("Total Page");
        dataResponse.setSuccess(true);
        dataResponse.setStatus(HttpStatus.OK.value());
        dataResponse.setData(productService.getTotalPage());
        return new ResponseEntity<>(dataResponse, HttpStatus.OK);
    }
    @GetMapping("/page/{current}")
    public ResponseEntity<?> getProductWithPage(@PathVariable(name = "current") int current) {
        ProductDTO productDTO = productService.getProducts(current);
        DataResponse dataResponse = new DataResponse();
        dataResponse.setData(productDTO);
        dataResponse.setSuccess(true);
        dataResponse.setDesc("get product with current page");
        dataResponse.setStatus(HttpStatus.OK.value());
        return new ResponseEntity<>(productDTO, HttpStatus.OK);
    }


}
