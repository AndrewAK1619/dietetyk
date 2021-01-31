package com.example.dietetyk.product;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.example.dietetyk.product.unit.UnitOfMeasuresAndWeights;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "products")
public class Product {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "product_id")
	private Long id;
	@Column(name = "product_name", length = 45, nullable = false)
	private String productName;
	@Column(nullable = false)
	private float kcal;
	@Column(nullable = false)
	private float protein;
	@Column(nullable = false)
	private float fats;
	@Column(nullable = false)
	private float carbohydrate;
	@ManyToOne
	@JoinColumn(name = "unit_id")
	private UnitOfMeasuresAndWeights unitOfMeasuresAndWeights;
}