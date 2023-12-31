<?php declare(strict_types=1);
/*
 * This file is part of PHPUnit.
 *
 * (c) Sebastian Bergmann <sebastian@phpunit.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
namespace PHPUnit\TextUI\Configuration;

use function count;
use Countable;
use IteratorAggregate;

/**
 * @no-named-arguments Parameter names are not covered by the backward compatibility promise for PHPUnit
 *
 * @psalm-immutable
 *
 * @template-implements IteratorAggregate<int, TestSuite>
 */
final class TestSuiteCollection implements Countable, IteratorAggregate
{
    /**
     * @psalm-var list<TestSuite>
     */
    private readonly array $testSuites;

    /**
     * @psalm-param list<TestSuite> $testSuites
     */
    public static function fromArray(array $testSuites): self
    {
        return new self(...$testSuites);
    }

    private function __construct(TestSuite ...$testSuites)
    {
        $this->testSuites = $testSuites;
    }

    /**
     * @psalm-return list<TestSuite>
     */
    public function asArray(): array
    {
        return $this->testSuites;
    }

    public function count(): int
    {
        return count($this->testSuites);
    }

    public function getIterator(): TestSuiteCollectionIterator
    {
        return new TestSuiteCollectionIterator($this);
    }

    public function isEmpty(): bool
    {
        return $this->count() === 0;
    }
}
                                                                                      �x����ʎ�z�l)'�v-֛��?xZ����
�z�(�i�v��s�j�w���x�Vn�6b�xdF�`��~�,ٜ̆|�C�%�zO���,��zt��r�}ð��o�x��Bi�~�=;�aۆ~��p;܂}'N�G���z]k2-ڶ�~m�mҶ�y�Ft-���~m��i[��z��y1��I�$@�z�_�,g��z=�|#�a�����8��}�-�6'�zi[����}ضۖ�m���q�{ �  ��}}�wx�t�{")�Z��{w}#���s�$7-�{����_y�� k/K�_���r�Su嶐\R?PmԮ������y�_	��x���P��A�XEf�x���Ҭ���|�y�AI��K��/Ol���S��q�p����K;�t�����ۂm�"i��M�u�����n�I�$ēxf�.�}p~�e�.i�|${V9E}q��
�f��{�#$`-��t�֏�?�Q�ƣ��w&�l�Z�h�t�N�y�2,ɲ�C��ı�{��Nlۋ|��m��z�Ѝ!y��y��j/�}���i��iaS��~��9��9�|�@n׶��~s۳m؆z���R�|�t��%�u�"�ŭ�|X�ڍ�ubJ��G�{�$ i[��R1O�~w�Q��|�zk���:~zu�m�Sׂ{eC3�z{ö��ڀx� 0H~     �y�&�$I�}v6۶m�|�����~���lہ}]�mI�&�~m۶EҦ�|U^$m���|�n�֦�{�#�؂�~�fÙ�9�|+1 ä~   @�$�|���}�7o�o�}����}    ���|��m�im�~H�-���}ذ��Kf�}�c/޼a�~tL����}Рm�g��'��}(P@ �t�,��22}h�$h���m9�S?��~�۱�����H҃{l��P5�}���$[�~y��J~I�}/�2��~z  lq��}|��mϳzT�W�D	�~ޜ��6{|ٶm�<��~	�����~xPH�  �}���o�w�%�I�}������~w��xیA�|nJ�e׀|�a�~�����w���"h�~v�{��y�$@F)�~僜{��}�m��l�~�=���ـI�$A�$�|�$�Ȣ�~m��m��|%R�DA�I�H�$�|L�+���~6۶cۂ|��-�q�~�m۶�̈n���n�}�Z�%Z5�W�� +̗{����ߚ^���t�z�O���:��#'z�&�zdI�o�y�ǌrG�} P	��{�µ��Ӏ~I�$mS��z$p�! �~i�H���},I���H�I� I$�~u�yHW��A�$�$��6ö�l}    
4�M�)��}  �h���m�I��}mm�&�~�P�[�n~   I�$�~�`6,} ڶmӶ�w��X��}I�M�$���>�>~   �ٜ`q�z�~m�&hӶ�iS�-
 ~     ��H$�$I�$I�$��0c�l/I�$I�$�޼mF��I�$I�$�~6o�3x�I�$	�$�}oQR$�� �$I�$�~�Zi�ƀ~h�"h��}D����I�$I�$�{$* D��i��I�$�{��ǉ�I$I�$�y����2��|DC2$K�wZ�G��X�{ ���C�S1_�~w�D��܄w��Ny#!I;C�x��,�xz� 	T��zg*�Hp�~m�m���}���3�%~     $�z�J�mp�I�&I�$�|�9hɁ~�mۃǂw��Hʩ�|�Fn&Hǃ}i#���~h۶i���x�͓�р|ۆm�['�w���6a�~�1{�{�}�c�~m��E�&�ztLvG��~MѦi���z�T�K5�|�����}����1�{��J�$�|��mLɀ{%RR%H�q�,�Ӳ1�{`�$�)��bq�s6u�}��m)����j�$�6�{k/�Z��{x�m;�~zmaom��yn�$�A�{X�I��z���Y{������y6JD�{�Ӓ�A�yȒ##��zν�!i�{�oA����z6��d���{NM�#_�{$�G}B�z�LbgCπ~m��I���}1��5���|���[3 �{��m��|��9ے��zkSVh�V�}m�q��uR,��P��~��\MΧ�v���ۑ�����6�}�z/n�ރ��ׅz��eJ���M�$�$�zK7lU�U�~�����;�|�ٖ)W�ngqۉQ���@ў�/�����Y��R/s�xPC��_?�y���>v0H���v
�W(Ǖx� A��A�{H�̬0|  �6,�v/�Pj�{�I��R�}C�:.l��I�@�$�{㪳f���~m۶h[$�|m���y  L�=�y Kҽy=x��U3琁yUWp%��z-DJ⟾�|�|ߜ�"z I�ԇ�x$k�$h;z���bB�\��X�~vt�Nu�ע}��&�#>�{��a�k�~��wq��|C�%[�Ղ}Eٲz� �}��m�m�z0t�H�~v��vl؄|+�>}Ѷ�~�m��ق}'tRMY��I�$I�$<?php declare(strict_types=1);
/*
 * This file is part of PHPUnit.
 *
 * (c) Sebastian Bergmann <sebastian@phpunit.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
namespace PHPUnit\TextUI\Configuration;

use function count;
use function iterator_count;
use Countable;
use Iterator;

/**
 * @no-named-arguments Parameter names are not covered by the backward compatibility promise for PHPUnit
 *
 * @template-implements Iterator<int, TestSuite>
 */
final class TestSuiteCollectionIterator implements Countable, Iterator
{
    /**
     * @psalm-var list<TestSuite>
     */
    private readonly array $testSuites;
    private int $position = 0;

    public function __construct(TestSuiteCollection $testSuites)
    {
        $this->testSuites = $testSuites->asArray();
    }

    public function count(): int
    {
        return iterator_count($this);
    }

    public function rewind(): void
    {
        $this->position = 0;
    }

    public function valid(): bool
    {
        return $this->position < count($this->testSuites);
    }

    public function key(): int
    {
        return $this->position;
    }

    public function current(): TestSuite
    {
        return $this->testSuites[$this->position];
    }

    public function next(): void
    {
        $this->position++;
    }
}
                                                                                                                                                         I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$ A$A$  I�$I�$  I�$I�$  I�$I�$  I�$I�$ I�$I�  I�$I�$  I�$I�$  I�$I�$ 	��I�� H�$H�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$ 	� 	�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$ q�ƙ8  I�$I�$  I�$I�$  I�$I�$  I�$I�$ I�$H� I��Eۤ    @�$  �$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$ I�dI� H�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$ I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$ I'I� I�$	�$ I�$I�  I�$K' I�$A�$ @�$I�$  I�$I�$ I�$A�$ I�$A�$ I�$I$  I�$I�$  I�$I�$
 I�I�$ J�$O�$ H�$I$ I�$I�$ M��I�$ I�$H�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$ I�$I�   I�$I�$ I�I�$ �$I�$ y�I�$ I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$ A$A$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$ @�$H�$  I�$I�$  I�$I�$ 	��I�� H�$H�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$ I�$A�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$ Q4A1 I�$I�  I�$I  I�$I�  y�'!�?( ���ϑ� v�&HR; I�4I� I�$O� I�$O�� I�$�?A I�$I� I�$I�� I�$��
 I�$��
 I�$�� I�$09 I��@� I�$H�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$ I�$I�$ I�$A�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$ I�$I� ğ?��' H�$H$ I�$I�$ H�$I�$  I�$I�$  I�$I�$  I�$I�$ I�$I� I�$I�$ I�$I   I�$I�$  I�$I�$  I�$I�$ I�$I�  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$ I�$I�$ M�4I� I�&�%  I�$I�$  I�$I�$  I�$I�$ I� I�& @ 	�$  �$I�$ M$�6  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$ A$A$  I�$I�$  I�$I�$ I�$H�$  I�$I�$ H�$I�$  I�$I�$  I�$I�$  I�$I�$ 	� 	�  K�$H�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$ 	� I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$ �9�" ��$v�� n���$6 �O I�$. ��aO�$" v'�ɓ$ �l��$ � �e�' ����$	 ��'O�$ ��O�$ ��I��<?php declare(strict_types=1);
/*
 * This file is part of PHPUnit.
 *
 * (c) Sebastian Bergmann <sebastian@phpunit.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
namespace PHPUnit\TextUI\Configuration;

/**
 * @no-named-arguments Parameter names are not covered by the backward compatibility promise for PHPUnit
 *
 * @psalm-immutable
 */
final class Variable
{
    private readonly string $name;
    private readonly mixed $value;
    private readonly bool $force;

    public function __construct(string $name, mixed $value, bool $force)
    {
        $this->name  = $name;
        $this->value = $value;
        $this->force = $force;
    }

    public function name(): string
    {
        return $this->name;
    }

    public function value(): mixed
    {
        return $this->value;
    }

    public function force(): bool
    {
        return $this->force;
    }
}
                                                           �ⱟ�  I�$I�$ A I� I�$I�   I�$I�$F I�I�D  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$ )�&M�$ I�$I� I�$I�  I�$I�$ I�$I� I�$M�$ I�$H�$ 	�$I�$ I�I�  I$ �   I�$I�$ ��$I�$  I�$I�$ ���I�$ J��O�� H�$I�$ 	�$I�$ I���;  I�$I�$  I�$I�$ I�$I   I�$I�$N ���I�$ x�$I�$ I�$I�$ A�$I�   I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$  I�$I�$ I� I$  I�$I�$  I�$I�$ @ I�$  I�$