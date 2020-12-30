package com.gft.produtos.api.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import com.gft.produtos.api.model.Cliente;

public interface ClienteRepository  extends JpaRepository<Cliente, Long>{
	
	List<Cliente> findByNomeContaining(String nome);

	public List<Cliente> findAllByOrderByNomeAsc();
	
	public List<Cliente> findAllByOrderByNomeDesc();

	Cliente findByNome(String string);

	public Page<Cliente> findAll(Pageable page);

	
}
