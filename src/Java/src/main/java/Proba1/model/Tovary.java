package Proba1.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Proba1.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Товары
 */
@Entity(name = "IISProba1Товары")
@Table(schema = "public", name = "Товары")
public class Tovary {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "НаимТовара")
    private String наимтовара;

    @Column(name = "Произв")
    private String произв;

    @Column(name = "ЕдИзм")
    private String едизм;

    @Column(name = "Цена")
    private Integer цена;

    @Column(name = "Масса")
    private Integer масса;


    public Tovary() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getНаимТовара() {
      return наимтовара;
    }

    public void setНаимТовара(String наимтовара) {
      this.наимтовара = наимтовара;
    }

    public String getПроизв() {
      return произв;
    }

    public void setПроизв(String произв) {
      this.произв = произв;
    }

    public String getЕдИзм() {
      return едизм;
    }

    public void setЕдИзм(String едизм) {
      this.едизм = едизм;
    }

    public Integer getЦена() {
      return цена;
    }

    public void setЦена(Integer цена) {
      this.цена = цена;
    }

    public Integer getМасса() {
      return масса;
    }

    public void setМасса(Integer масса) {
      this.масса = масса;
    }


}