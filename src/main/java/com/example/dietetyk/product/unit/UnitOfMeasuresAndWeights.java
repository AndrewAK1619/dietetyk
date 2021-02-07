package com.example.dietetyk.product.unit;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.example.dietetyk.product.Product;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "units_of_measures_and_weights")
public class UnitOfMeasuresAndWeights implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "unit_id")
	private Long id;
	@Column(length = 40, unique = true, nullable = false)
	private String unit;
	@Column(length = 5, unique = true, nullable = false)
	private String symbol;
	@OneToMany(mappedBy = "unitOfMeasuresAndWeights", 
			cascade = { CascadeType.REMOVE })
	private List<Product> products = new ArrayList<>();
}
