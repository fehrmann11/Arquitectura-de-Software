package com.henry.market.persistence.crud;

import com.henry.market.persistence.entity.Producto;

import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;

//la tabla y le tipo de la clave primaria para CrudRepository
public interface ProductoCrudRepository extends CrudRepository<Producto,Integer> {

    List<Producto> findByIdCategoriaOrderByNombreAsc(int idCategoria);

    Optional<List<Producto>> findByCantidadStockLessThanAndEstado(int cantidadStock, boolean estado);
}
